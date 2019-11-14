// Import stylesheets
import './style.css';
import * as helper from './helper.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// 异步函数a
    var a = function () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log('a')
          resolve('a')
        }, 1000)
      })
    }

    // 异步函数b
    var b = function (data) {
      return new Promise(function (resolve, reject) {
        console.log(data + 'b')
        resolve(data + 'b')
      })
    }

    // 异步函数c
    var c = function (data) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log(data + 'c')
          resolve(data + 'c')
        }, 500)
      })
    }

    helper.asyncQueue([a, b,c])
    // 实现二
    const queue2 = async (funcArr) => {
      let result = null
      for (let func of funcArr) {
        result = await func(result)
      }
    }

const obj1 = {
  a: {
    b: 1,
    c: 'string',
    d: null,
    e: undefined,
    f: true,
    g: Symbol(),
    h: []
  }
}

const obj2 = helper.deepCopy(obj1)

console.log(obj1)
console.log(obj2)
obj2.a.b = 2
console.log(obj1)
console.log(obj2)

const obj = {
  name: 'allen',
  age: 18,
}
function test(height) {
  console.log(`${this.name}`, `${this.age}, ${height}`)
}
test.call2(obj, 180)

const btn = document.querySelector('#click')
btn.addEventListener('click', helper.throttle(() => {
  console.log('click')
}, 2000))