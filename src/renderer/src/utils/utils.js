/**
 * @params arr 传入的源数组
 * @params length 需要获取的元素的个数
 */
export function myRandom(arr, length) {
  let newArr = [] // 组成的新数组初始化

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * arr.length)
    const item = arr[index]
    newArr.push(item)
    arr.splice(index, 1)
  }
  return newArr.reverse()
}

// myRandom([1,2,3,4,5,6], 3)

export function equar(a, b) {
  // 判断数组的长度
  if (a.length !== b.length) {
    return false
  } else {
    // 循环遍历数组的值进行比较
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false
      }
    }
    return true
  }
}
