import { assert } from 'chai'
import { deepCopy } from '../helper'

describe('deep copy', function () {
  const obj = { a: 1 }
  const copiedObj = deepCopy(obj)
  it('copied obj should have same properties', function () {
    assert.equal(obj.a, copiedObj.a)
  })
})