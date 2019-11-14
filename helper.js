// 异步队列
export const asyncQueue = (funcArr) => {
  let P = Promise.resolve()
  for (let func of funcArr) {
    P = P.then((data) => {
      return func(data)
    })
  }
}

// 深拷贝
export const deepCopy = (obj) => {
  const type = Object.prototype.toString.call(obj)
  let copy = null
  switch (type) {
    case '[object Object]': {
      copy = {}
      const keys = Object.keys(obj)
      keys.forEach(k => {
        copy[k] = deepCopy(obj[k])
      })
      return copy
    }

    case '[object Array]': {
      copy = []
      obj.forEach(v => {
        copy.push(deepCopy(v))
      })
    }

    case '[object Symbol]':
    case '[object Boolean]':
    case '[object Undefined]':
    case '[object Null]':
    case '[object String]':
    case '[object Number]': {
      return obj
    }
  }
}

// 手动实现 Call
Function.prototype.call2 = function (context) {
  const args = Array.prototype.slice.call(arguments, 1)
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

// 手动实现 Apply
Function.prototype.apply2 = function (context) {
  const [args] = Array.prototype.slice.call(arguments, 1,2)
  console.log('args', args)
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
}

// 手动实现 Bind

// 防抖
export const debunce = (fn, time) => {
  let t = null

  return () => {
    clearTimeout(t)
    const args = Array.prototype.slice(arguments, 1)
    t = setTimeout(() => {
      fn.apply(this)
    }, time)
  }
}

// 节流
export const throttle = (fn, time) => {
  let active = true  
  return () => {
    if (!active) return
    active = false
    setTimeout(() => {
      fn.apply(fn)
      active = true
    }, time)
  }
}