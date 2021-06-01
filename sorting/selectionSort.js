// places smallest value into sorted positions

// swapping function 
const swap = (arr, index1, index2) => {
  // assign the value of the first item to a variable
  let temp = arr[index1]
  // make the first item the value of the second item
  arr[index1] = arr[index2]
  // fianally make the second item the value of the variable  set earlier in this block
  // switching the value of the first and second items
  arr[index2] = temp;
  
}

const selectionSort = (arr) => {
  // loop through the array
  // place all the variables in the loop so that they are in scope and can be changed as
  // we iterate through the original array.
  for (let i = 0; i < arr.length; i++) {
    // create variable to store the lowest number to.
    let lowest = i;
    for (let x = i + 1; x < arr.length; x++){
      if (arr[lowest] > arr[x]) {
        lowest = x
      }
    }
    if (i !== lowest) {
      swap(arr,i,lowest)
    }
  }
return arr
}

console.log(selectionSort([0,23,34,22,10,19,17]))