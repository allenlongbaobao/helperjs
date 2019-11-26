import { assert } from 'chai'
import { Singleton } from '../helper'

describe('单例模式', () => {
  it('调用单例模式，创造两个对象，无返回值，应该相等（实际是第一个对象）', () => {
    const Create = function () {
      this.name = 'allen'
    }
    let user = new Singleton(Create)
    let user2 = new Singleton(Create)
    user.name = 'alice'
    assert.equal(user2.name, 'alice')
  })

  // it ('调用单例模式，有返回值的情况, 试图构造不同构造函数的单例', () => {
  //   const Create2 = function () {
  //     return {
  //       name: 'allen'
  //     }
  //   }
  //   const user = new Singleton(Create2)
  //   const user2 = new Singleton(Create2)
  //   console.log('user', user)
  //   assert.equal(user, user2)
  //   assert.equal(user.name,'allen')
  // })
})