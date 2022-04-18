const same = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false
  }
  let returnArr = []

  arr1.map((x) => returnArr.push(x * x));

  arr2.map((x) => {
    let squaredCheckIndex = returnArr.indexOf(x)
    console.log(squaredCheckIndex)
    if (squaredCheckIndex != -1) {
      returnArr.splice(squaredCheckIndex,1)
    } else {
      return false
    }
  })
  console.log(returnArr)
  return (returnArr.length ===0)
}

console.log(same([1,2,1],[4,1,4]))