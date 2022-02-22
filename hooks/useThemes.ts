import { useContext } from 'react'
import ThemeContext from '@/contexts/ThemeContext'

export default function useThemes() {
    return useContext(ThemeContext)
}
