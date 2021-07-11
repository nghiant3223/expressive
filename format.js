function toTitleCase(s) {
  return s.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function toLowerCase(s) {
  return s.toLowerCase()
}

function toUppercase(s) {
  return s.toUpperCase()
}

function toCamelCase(s) {
  return s.replace(/\s+(.)/g, (match, group) => group.toUpperCase())
}

function toSnakeCase(s) {
  return s.split(' ').join('_')
}

module.exports = {
  toTitleCase,
  toLowerCase,
  toUppercase,
  toCamelCase,
  toSnakeCase,
}