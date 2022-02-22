type tailwindStyles = [
  string,
  { [key: string]: Array<string> | string | tailwindStyles }
]

export function prefixStyles(defaultStyles: string, styles?: { [key: string]: Array<string> | string | tailwindStyles }, prefixes = ''): string {
  if(!styles){
    return simplePrefixStyles(defaultStyles.split(' '), prefixes)
  } else {
    return simplePrefixStyles(defaultStyles.split(' '), prefixes) + ' ' + Object.keys(styles).reduce((acc, key) => {
      const prefix = prefixes ? `${prefixes}:${key}` : key
      let classes = styles[key]
      if(Array.isArray(classes)) {
        if(!Array.isArray(classes[2])) {
          return prefixStyles(...(classes as tailwindStyles), prefix)
        }
      }
      if(typeof classes === 'string'){
        classes = classes.split(' ')
      }

      return acc + simplePrefixStyles(classes as Array<string>, prefix)
    }, '')
  }
}

function simplePrefixStyles(styles: Array<string>, prefixes: string) {
  if(!prefixes) return styles.join(' ')
  return styles.reduce((acc, val) => {
    return ` ${acc} ${prefixes}:${val}`
  }, '')
}