// Given an array A of size N-1 and given that there 
// are numbers from 1 to N with one missing element.
// The missing number is to be found.


missingNumber = (arr) => {
  // loop through the array
  for (i = 0; i <= arr.length; i++) {
    // asign a number to go up each loop one ahead of current array number
    // because the numbers are 1 to N if I start counting from one
    // it will always match the iteration until the iteration is not in the array
    num = i + 1
    if (arr[i] !== num) {
     return num
    } 
  }
}

answer = missingNumber([1,2,3,5])
console.log(answer)