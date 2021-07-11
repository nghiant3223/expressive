const assert = require("chai").assert;
const {expressify} = require("../index")

describe("expressify", function () {
  describe("should match text case", function () {
    it('default case', function () {
      const input = '1123'
      const output = expressify(input)
      assert.equal('Trusting Tarantula', output)
    })
    it('default case with separator', function () {
      const input = '1123'
      const output = expressify(input, {separator: '_'})
      assert.equal('Trusting_Tarantula', output)
    })
    it('lower case', function () {
      const input = '1123'
      const output = expressify(input, {case: 'lower'})
      assert.equal('trusting tarantula', output)
    })
    it('lower case with separator', function () {
      const input = '1123'
      const output = expressify(input, {case:'lower', separator: '_'})
      assert.equal('trusting_tarantula', output)
    })
    it('upper case', function () {
      const input = '1123'
      const output = expressify(input, {case: 'upper'})
      assert.equal('TRUSTING TARANTULA', output) })
    it('lower case with separator', function () {
      const input = '1123'
      const output = expressify(input, {case:'upper', separator: '-'})
      assert.equal('TRUSTING-TARANTULA', output)
    })
  })

  describe("should have two words for various input", function () {
    const testcases = [
      '', '1', 1,
      '2343', 23432,
      'df34reoijsdfsd;', '23234asdfadf^$($(#',
      '29329423208as2034234;', 'kjxcvlknsdflk2;3jk423049u8is90dfsdf234',
      'a very long sentence', 'averylongwordwithoutanyspace', 'random string',
      {x: 1, y: 2}, {a: '2343', b: '343423', c: 934, d: {x: 3434, y: '343'}}
    ]
    for (const input of testcases) {
      const output = expressify(input)
      assert.isNotEmpty(output)
      assert.lengthOf(output.split(' '), 2)
      assert.isNotEmpty(output.split(' ')[0])
      assert.isNotEmpty(output.split(' ')[1])
    }
  })

  describe("should returns same output for different number of calls", function () {
    it("2 calls", function () {
      const input = '230492384234'
      const output1 = expressify(input)
      const output2 = expressify(input)
      assert.strictEqual(output1, output2)
    });
    it("3 calls", function () {
      const input = '230492384234'
      const output1 = expressify(input)
      const output2 = expressify(input)
      const output3 = expressify(input)
      assert.strictEqual(output1, output2)
      assert.strictEqual(output1, output3)
    });
  })
});