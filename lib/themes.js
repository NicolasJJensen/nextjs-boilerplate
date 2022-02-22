const blueTheme = {
  light: {
    base: "#DDDDFF",
    primary: "#0000FF",
    text: "#000099"
  },
  dark: {
    base: "#000022",
    primary: "#0000CC",
    text: "#0000FF"
  }
}

const greenTheme = {
  light: {
    base: "#DDFFDD",
    primary: "#00FF00",
    text: "#009900"
  },
  dark: {
    base: "#002200",
    primary: "#00CC00",
    text: "#00FF00"
  }
}

const orangeTheme = {
  light: {
    base: "#FFFFCC",
    primary: "#FFAA00",
    text: "#CC7700"
  },
  dark: {
    base: "#221100",
    primary: "#EE9944",
    text: "#FFAA00"
  }
}

// Combine themes and set the default theme before exporting
const defaultTheme = 'green'
const themes = {
  green: greenTheme,
  blue: blueTheme,
  orange: orangeTheme
}

// Export themes
export default themes

// Export the default theme
export { defaultTheme }
