import { useContext } from 'react'
import ThemeContext from '@/contexts/ThemeContext'

export default function useSetTheme() {
    return useContext(ThemeContext)
}
