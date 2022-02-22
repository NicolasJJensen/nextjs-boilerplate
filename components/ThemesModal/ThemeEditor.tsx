import { SingleThemeType } from "@/types/ThemeTypes"
import { useEffect, useState } from "react"

type PropsType = {
  disabled?: false,
  themePart: SingleThemeType,
  updateThemePart: (newPart: SingleThemeType) => void
} | {
  disabled: true,
  themePart: SingleThemeType
}

export default function ThemeEditor(props: PropsType) {
  const { themePart } = props

  function handleColorChange(e: React.ChangeEvent<HTMLInputElement>) {
    if(!props.disabled) props.updateThemePart({
      ...themePart,
      [e.currentTarget.dataset.key || '']: e.currentTarget.value
    })
  }

  function updateThemePart(key: string, newPart: SingleThemeType) {
    if(!props.disabled) props.updateThemePart({
      ...themePart,
      [key]: newPart
    })
  }

  return (
    <>
      <div>
        {Object.keys(themePart).map(key => {
          const val = themePart[key]
          return typeof val === 'string' ? (
            <div key={key}>
              <label>{key}</label>
              <input type='text' value={val} data-key={key} onChange={handleColorChange} />
            </div>
          ) : (
            <div key={key}>
              <p>{key}</p>
              <ThemeEditor themePart={val} updateThemePart={(newPart) => updateThemePart(key, newPart)} />
            </div>
          )
        })}
      </div>
      <br />
    </>
  )
}