import themes from '@/lib/themes'
import { allThemesToCssVars } from '@/helpers/theme'

// Hydration warning complains that local value is different to server
// Ignore that warning
export default function CSS() {
  return (
    <style suppressHydrationWarning>{allThemesToCssVars(themes)}</style>
  )
}
