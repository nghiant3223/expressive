const {simpleHash} = require("./hash")
const animals = require("./assets/animals")
const adjectives = require("./assets/adjectives")
const {toLowerCase, toCamelCase, toUppercase, toTitleCase, toSnakeCase} = require('./format')

function expressify(data, options) {
  const s = stringify(data)
  const h = simpleHash(s)

  const m = middleIndex(h)
  const firstHalf = h.substring(0, m)
  const lastHalf = h.substring(m, h.length)
  const firstHalfSum = parseInt(firstHalf)
  const lastHalfSum = parseInt(lastHalf)

  const adj = adjectives[firstHalfSum % adjectives.length]
  const noun = animals[lastHalfSum % animals.length]
  return format([adj, noun], options)
}

function format(strings, options = {}) {
  let caseFunction = toTitleCase;
  let separator = options.separator
  switch (options.case) {
    case 'title':
      caseFunction = toTitleCase
      break
    case 'upper':
      caseFunction = toUppercase
      break
    case 'lower':
      caseFunction = toLowerCase
      break
    case 'camel':
      separator = null
      caseFunction = toCamelCase
      break
    case 'snake':
      separator = null
      caseFunction = toSnakeCase
      break
  }
  const textAfterCaseFormat = caseFunction(strings.join(' '))
  if (separator === null || separator === undefined) {
    return textAfterCaseFormat
  }
  return textAfterCaseFormat.split(' ').join(separator)
}

function middleIndex(s) {
  if (s.length % 2 === 0) {
    return s.length / 2
  }
  return (s.length - 1) / 2
}

function stringify(s) {
  return JSON.stringify(s)
}

module.exports = {
  expressify
}