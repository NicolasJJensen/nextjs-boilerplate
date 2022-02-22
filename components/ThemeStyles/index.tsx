import { useEffect, useState } from "react"

import { allThemesToCssVars } from '@/helpers/theme'
import { defaultTheme } from '@/lib/themes'
import ThemeContext from '@/contexts/ThemeContext'
import { ThemeType, ThemesType } from "@/types/ThemeTypes"

type PropsType = {
  children: React.ReactNode,
  themes: ThemesType,
  currentThemeKey?: string,
  currentModeKey?: string,
  customThemesKey?: string
}

export default function ThemeStyles(props: PropsType) {
  const currentThemeKey = props.currentThemeKey || 'theme'
  const currentModeKey = props.currentModeKey || 'mode'
  const customThemesKey = props.customThemesKey || 'customThemes'

  const [currentMode, rawSetCurrentMode] = useState<'light' | 'dark'>()
  const [currentTheme, rawSetCurrentTheme] = useState<string>()
  const [customThemes, setCustomThemes] = useState<ThemesType>({})
  const [render, setRender] = useState(false)
  const allThemes = { ...props.themes, ...customThemes } as ThemesType

  // When the component is first loaded get the initialTheme and set that in state
  useEffect(() => {
    // Turn any transitions off the body until all the styles have finished being set
    document.body.style.transition = 'none'

    // Get the correct default theme
    let theme = ''
    if(window.localStorage.getItem(currentThemeKey)) {
      theme = window.localStorage.getItem(currentThemeKey) || ''
    } else {
      theme = defaultTheme
    }

    // Get the correct default theme mode
    let mode = ''
    if(window.localStorage.getItem(currentModeKey)) {
      mode = window.localStorage.getItem(currentModeKey) || ''
    } else {
      mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    document.body.dataset.theme = theme
    document.body.dataset.mode = mode

    rawSetCurrentTheme(theme)
    rawSetCurrentMode(mode as 'light' | 'dark')
    setCustomThemes(JSON.parse(window.localStorage.getItem(customThemesKey) || '{}') as ThemesType)
  }, [currentModeKey, currentThemeKey, customThemesKey])

  // If theme updates, update the body to reflect change to new theme
  useEffect(() => {
    if(currentTheme) document.body.dataset.theme = currentTheme
    if(currentMode) document.body.dataset.mode = currentMode
  }, [currentTheme, currentMode])

  // If customThemes has been changed update the local storage to reflect that
  // Also first time it is set make render true (nothing is rendered until themes are set)
  useEffect(() => {
    localStorage.setItem(customThemesKey, JSON.stringify(customThemes))
    setRender(true)
  }, [customThemes, customThemesKey])

  // After everything is rendered all transitions on the body again
  useEffect(() => {
    if(render) document.body.style.transition = ''
  }, [render])

  // Changes the theme state and updates localStorage to persist preference
  function setTheme(theme: string) {
    // If the new theme isn't a match for any of the possible themes don't change theme
    if(!allThemes[theme]) return

    rawSetCurrentTheme(theme)
    window.localStorage.setItem(currentThemeKey, theme)
  }

  function setMode(mode: 'light' | 'dark') {
    rawSetCurrentMode(mode)
    window.localStorage.setItem('mode', mode)
  }

  function addTheme(themeName: string, theme: ThemeType) {
    setCustomThemes({...customThemes, [themeName]: theme})
  }

  function removeTheme(themeName: string) {
    // If the theme isn't a match for any of the possible themes nothing to remove
    if(!allThemes[themeName]) return

    const newCustomThemes = customThemes || {}
    delete newCustomThemes[themeName]

    setCustomThemes(newCustomThemes)
  }

  function editTheme(themeName: string, theme: ThemeType, newThemeName?: string) {
    // If the theme isn't a match for any of the possible themes don't edit theme
    if(!allThemes[themeName]) return

    if(!newThemeName) return setCustomThemes({...customThemes, [themeName]: theme})

    const newCustomThemes = customThemes
    delete newCustomThemes[themeName]

    setCustomThemes({...newCustomThemes, [newThemeName]: theme})
  }

  return (
    <ThemeContext.Provider value={{
      themes: allThemes,
      defaultThemes: props.themes,
      customThemes: customThemes,
      currentTheme: currentTheme,
      mode: currentMode,
      setTheme: setTheme,
      setMode: setMode,
      addTheme: addTheme,
      editTheme: editTheme,
      removeTheme: removeTheme
    }}>
      <style suppressHydrationWarning>{allThemesToCssVars(allThemes)}</style>
      {render ? props.children : <></>}
    </ThemeContext.Provider>
  )
}