# Introduction

Expressive is a npm package which generates meaningful strings from any input.  
It guarantees that same inputs always produce same outputs.

## Getting Started

### Installation

```bash
$ npm install expressivestrings
```

### Example

```javascript
const expressive = require('expressivestrings')
console.log('Meaningful string:', expressive.expressify('an example string'))
```

### Output

```bash
Meaningful string: Second-hand Millipede
```

## Usage

### Prototype

```javascript
function expressify(string: String, options: Object)
```

There are many options you can pass:
- `'case'`: Case of the result text, it can be one of `'lower'`, `'upper'`, `'title'`, `'camel'`, `'snake'`. Default value is `'title'`.
- `'separator'`: Word separator of result text, you can pass any value you want. Default value is `' '`.
