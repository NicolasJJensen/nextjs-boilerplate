import { SingleThemeType, ThemesType } from '@/types/ThemeTypes'
import { camelCaseToKebabCase } from '@/helpers/string'

function isThemeType(themeVal: SingleThemeType | string): themeVal is SingleThemeType {
  return themeVal.constructor == ({}).constructor
}

// Converts a theme object to css variables in the form:
// --theme-KEBAB-CASE-VARNAME
function themeToCssVars(theme: SingleThemeType, keyStart = '--theme'): {[key: string]: string} {
  return Object.keys(theme).reduce((acc, key) => {
    const themeVal = theme[key]
    const newKey = `${keyStart}-${camelCaseToKebabCase(key)}`
    if(isThemeType(themeVal)) {
      return Object.assign(
        acc,
        themeToCssVars(themeVal, newKey)
      )
    } else {
      return Object.assign(
        acc,
        { [newKey]: themeVal }
      )
    }
  }, {})
}

// Converts a single theme to a string containing the css vars
function themeCssVarsToString(theme: SingleThemeType) {
  const themeCssVars = themeToCssVars(theme)
  return Object.keys(themeCssVars).reduce((acc, key) => {
    return acc + `${key}: ${themeCssVars[key]};\n`
  }, '{\n') + '}\n'
}

// Converts all themes to css vars
// Uses the key for "theme" data value on the body that it will apply to
export function allThemesToCssVars(inputThemes: ThemesType) {
  return Object.keys(inputThemes).reduce((acc, theme) => {
    const singleTheme = inputThemes[theme]
    acc += `body[data-theme="${theme}"][data-mode="light"] ${themeCssVarsToString(singleTheme['light'])}`
    acc += `body[data-theme="${theme}"][data-mode="dark"] ${themeCssVarsToString(singleTheme['dark'])}`

    return acc
  }, '')
}
