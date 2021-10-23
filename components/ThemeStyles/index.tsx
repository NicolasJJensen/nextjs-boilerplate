import { useEffect, useState } from "react"

import themes from '@/lib/themes'
import ThemeContext from '@/contexts/ThemeContext'
import ThemesToCSS from './ThemesToCSS'

type PropsType = {
  children: React.ReactNode
}

export default function ThemeStyles({ children }: PropsType) {
  const [mode, rawSetMode] = useState<'light' | 'dark'>()
  const [theme, rawSetTheme] = useState<keyof typeof themes>()

  // Changes the theme state and updates localStorage to persist preference
  function setTheme(theme: keyof typeof themes) {
    rawSetTheme(theme)
    window.localStorage.setItem('theme', theme)
  }

  function setMode(mode: 'light' | 'dark') {
    rawSetMode(mode)
    window.localStorage.setItem('mode', mode)
  }

  // When the component is first loaded get the initialTheme and set that in state
  useEffect(() => {
    rawSetTheme(document.documentElement.style.getPropertyValue('--initialTheme') as keyof typeof themes)
    rawSetMode(document.documentElement.style.getPropertyValue('--initialMode') as 'light' | 'dark')
  }, [])

  // If theme updates update the body to reflect change to new theme
  useEffect(() => {
    if(theme) document.body.dataset.theme = theme
    if(mode) document.body.dataset.mode = mode
  }, [theme, mode])

  return (
    <ThemeContext.Provider value={{ setTheme: setTheme, setMode: setMode }}>
      <ThemesToCSS />
      {children}
    </ThemeContext.Provider>
  )
}