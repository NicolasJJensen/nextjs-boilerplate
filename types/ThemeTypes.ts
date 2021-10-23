export type SingleThemeType = {
    [key: string]: SingleThemeType | string
}

export type ThemeType = {
    [key: string]: {
        dark: SingleThemeType,
        light: SingleThemeType,
        default?: SingleThemeType
    }
}