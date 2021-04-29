let binarySearch = (array, value) => {
  let ans = []

  let divideAndCheck = (theArray) => {
    let variableLeft = []
    let variableRight = []
 
    array.map((x, i) => {
      i <= Math.round(theArray.length / 2) ?
        variableLeft.push(x)
        :
        variableRight.push(x)
    })

    if (variableLeft[variableLeft.length - 1] === value)
    {
      ans.push(variableLeft[variableLeft.length - 1]) 
      return;
    }
    variableLeft[variableLeft.length - 1] < value ? 
      divideAndCheck(variableRight)
      :
      divideAndCheck(variableLeft)
  }
}