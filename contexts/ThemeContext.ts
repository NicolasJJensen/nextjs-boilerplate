import { createContext } from "react"
import { defaultTheme } from '@/lib/themes'
import { ThemesType, ThemeType } from "@/types/ThemeTypes"

const ThemeContext = createContext<{
    themes: ThemesType,
    defaultThemes: ThemesType,
    customThemes: ThemesType,
    currentTheme: string | undefined,
    mode: 'light' | 'dark' | undefined,
    setTheme: (theme: string) => void,
    setMode: (mode: 'light' | 'dark') => void,
    addTheme: (themeName: string, theme: ThemeType) => void,
    editTheme: (themeName: string, theme: ThemeType, newThemeName?: string) => void,
    removeTheme: (themeName: string) => void
}>({
    themes: {},
    defaultThemes: {},
    customThemes: {},
    currentTheme: defaultTheme,
    mode: 'light',
    setTheme: () => {},
    setMode: () => {},
    addTheme: () => {},
    editTheme: () => {},
    removeTheme: () => {}
})

export default ThemeContext
