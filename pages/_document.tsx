import { defaultTheme } from "@/lib/themes"
import Document, { Html, Head, Main, NextScript } from "next/document"

function setColorsByTheme() {
  // Get the correct color mode
  let mode = ''
  if(window.localStorage.getItem('mode')) {
    mode = window.localStorage.getItem('mode') || ''
  } else {
    mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  // Get the correct theme mode
  let theme = ''
  if(window.localStorage.getItem('theme')) {
    theme = window.localStorage.getItem('theme') || ''
  } else {
    theme = '🍆💦🥵'
  }

  // Set the body dataset to the correct theme and mode
  document.body.dataset.theme = theme
  document.body.dataset.mode = mode
}

function MagicScriptTag() {
  // Wrap it in an IIFE and replace the rainbow emoji with the actual default theme
  const codeToRunOnClient = `(${String(setColorsByTheme)})()`.replace('🍆💦🥵', defaultTheme)

  // Inject it
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <MagicScriptTag />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument