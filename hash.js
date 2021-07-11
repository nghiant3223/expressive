function simpleHash(s) {
  let h = 0xdeadbeef
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 2654435761);
  }
  const n = (h ^ h >>> 16) >>> 0;
  return n.toString(10)
}

module.exports = {
  simpleHash
}