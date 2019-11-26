import { assert } from 'chai'
import { deepCopy } from '../helper'

describe('deep copy', function () {

  describe('Copy Object', () => {
    const obj = { a: 1 }
    const copiedObj = deepCopy(obj)
    it('copied obj should have same properties', function () {
      assert.equal(obj.a, copiedObj.a)
    })
  })

  /** modify properties */
  describe('Modify Object Properties', () => {
    const obj = { a: 1 }
    const copiedObj = deepCopy(obj)
    copiedObj.a = 2
    it('modify copied obj should not affect origin obj', function () {
      assert.equal(copiedObj.a, 2)
      assert.equal(obj.a, 1)
    })
  })

  /** Array */
  describe('Copy Array', () => {
    const array = [1,2,3]
    const copiedArray = deepCopy(array)
    it ('copied array should have same value', () => {
      assert.equal(array[0], copiedArray[0])
      assert.equal(array[1], copiedArray[1])
      assert.equal(array[2], copiedArray[2])
    })
  })
})