export type SingleThemeType = {
    [key: string]: SingleThemeType | string
}

export type ThemeType = {
    dark: SingleThemeType,
    light: SingleThemeType
}

export type ThemesType = {
    [key: string]: ThemeType
}