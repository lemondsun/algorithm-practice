let binarySearch = (array, value) => {
  // let ans = []

  // let divideAndCheck = (theArray) => {
  //   let variableLeft = []
  //   let variableRight = []
 
  //   array.map((x, i) => {
  //     i <= Math.round(theArray.length / 2) ?
  //       variableLeft.push(x)
  //       :
  //       variableRight.push(x)
  //   })

  //   if (variableLeft[variableLeft.length - 1] === value)
  //   {
  //     ans.push(variableLeft[variableLeft.length - 1])
  //     return;
  //   }
  //   variableLeft[variableLeft.length - 1] < value ?
  //     divideAndCheck(variableRight)
  //     :
  //     divideAndCheck(variableLeft)
  // }
  
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor(array.length / 2);

  while (left < right && array[middle] !== value) {
    value < array[middle] ?
      right = middle - 1
      :
      left = middle + 1
    middle = Math.floor((left + right) / 2);
  }
  return array[middle] === value ? middle : -1;
};

console.log(binarySearch([1,2,3,4,5],2))