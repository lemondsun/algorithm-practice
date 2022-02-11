const uniqueInOrder = (iterable) => {
  if (typeof iterable === 'string') {
iterable = iterable.split('')
  }
   
    console.log(iterable)
  newItem = null;
  newArr = [];
  iterable.map((x) => {
    if (newItem === null) {
      newItem = x
      newArr.push(x)
    } else if (newItem !== x) {
      newItem = x
      newArr.push(x)
    }
  })

  return newArr;
}

console.log(uniqueInOrder([1,2,2,3,3]))