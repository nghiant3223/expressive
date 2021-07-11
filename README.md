# Introduction

Expressive is a npm package which generates meaningful strings from any input. The result is two meaningful words in title case. It guarantees that same inputs always produce same outputs.

## Getting Started

### Installation

```bash
$ npm install expressivestrings
```

### Example

```javascript
const expressive = require('expressivestrings')

console.log(expressive.expressify('an example string'))         // Second-hand Millipede
console.log(expressive.expressify(349384394))                   // Upset Siamese
console.log(expressive.expressify({x:1, y: 'a random string'})) // Upright Chinchilla
```

## Usage

### Prototype

```javascript
function expressify(string: String, options: Object)
```

There are many fields of `options` you can pass:
- `'case'`: Case of the result text, it can be one of `'lower'`, `'upper'`, `'title'`, `'camel'`, `'snake'`. Default value is `'title'`.
- `'separator'`: Word separator of result text, you can pass any value you want. Default value is `' '`.
