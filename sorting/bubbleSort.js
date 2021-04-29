// BubbleSort
// A sorting algorithm where the largest values bubble up to the top.

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

let testArray = [5, 19, 6, 99, 40, 39, 58]

const bubbleSort = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>arr[i+1]) {
  swap(arr,i,i+1)
}
  }

}
bubbleSort(testArray)

console.log(testArray)