import { createContext } from "react"
import themes from '@/lib/themes'

const ThemeContext = createContext<{
    setTheme: (string: keyof typeof themes) => void,
    setMode: (string: 'light' | 'dark') => void
}>({setTheme: () => {}, setMode: () => {}})

export default ThemeContext
