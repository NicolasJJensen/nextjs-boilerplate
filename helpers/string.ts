export function camelCaseToKebabCase(string: string) {
  return string.split(/(?=[A-Z])/).join('-').toLowerCase()
}