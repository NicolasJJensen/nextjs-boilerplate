import { SingleThemeType } from "@/types/ThemeTypes"
import { Fragment, useEffect, useState } from "react"

import useThemes from '@/hooks/useThemes'

import ThemeEditor from './ThemeEditor'

type PropsType = {
  open: boolean,
  onClose: () => void
}

export default function ThemesModal(props: PropsType) {
  const {
    open: propsOpen,
    onClose
  } = props

  // Import from context
  const { themes, defaultThemes, customThemes, currentTheme, addTheme, setTheme, editTheme, removeTheme, setMode } = useThemes()


  // Setup State
  const [open, setOpen] = useState(propsOpen)

  // Update state when props changes to reflect change in props
  useEffect(() => setOpen(propsOpen), [propsOpen])

  function updateThemePart(themeName: string, themePart: SingleThemeType) {
    editTheme(themeName, { light: themePart, dark: themePart })
  }

  return (
    <div>
      {Object.keys(defaultThemes).map(themeName => {
        <Fragment key={themeName}>
          <p>{themeName}</p>
          <ThemeEditor disabled={true} themePart={defaultThemes[themeName]['light']} />
          <ThemeEditor disabled={true} themePart={defaultThemes[themeName]['dark']} />
          <br />
        </Fragment>
      })}
      {Object.keys(customThemes).map(themeName => (
        <Fragment key={themeName}>
          <p>{themeName}</p>

          <p>Light Version</p>
          <ThemeEditor themePart={customThemes[themeName]['light']} updateThemePart={(themePart) => updateThemePart(themeName, themePart)}/>

          <p>Dark Version</p>
          <ThemeEditor themePart={customThemes[themeName]['dark']} updateThemePart={(themePart) => updateThemePart(themeName, themePart)}/>
          <br />
        </Fragment>
      ))}
    </div>
  )
}