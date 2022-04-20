const averagePair = (arr, target) => {
  if (arr.length === 0) {
    return false
  }

  let lowNum = 0
  let highNum = arr.length - 1
  let targetFound = false

  arr.map((x, i) => {
    let average = (arr[lowNum] + arr[highNum]) / 2
    if (average === target) targetFound= true;
    average<target ? lowNum +=1 : highNum -= 1
  })

  return targetFound
}

console.log(averagePair([], 8))