/**
 * given an array of integers, find the minimum sum.
 * @param {Array} - an even number of positive integers
 * @returns {Integer} - the lowest sum of pairs from the param
 */

/* --- sudo code ---
sort the array from lowest to highest
create a variable to hold the answer
loop through the sorted array and multiply the first element by the last
 */

const minSum = (arr) => {
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
  
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {

    if (arr[i]>arr[i+1]) {
  swap(arr,i,i+1)
}
  }

}
  let ans = bubbleSort(arr)
  console.log(arr)
  return ans
  
}

console.log(minSum([12,6,10,26,3,24]))