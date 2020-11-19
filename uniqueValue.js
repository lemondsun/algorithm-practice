/*
this problem will use two different pointers to come to a solution.
first I will do a practice exercise to get the pattern down.
*/
/**
 * This function will search an array for the first pair of numbers to  equal  zero.
 * @param {array} a sorted array that might feature negative numbers.
 * @return {array}  an array with the first to values from the param that equals zero.
 */
sumZero = (arr) => {
// left will be a pointer that starts from the left side of the array
// Its value is zero so that it can represent the first item in the array
  let left = 0;
  // right will be a pointer that starts from the right side of the array
// Its value will represent the last item in the array
  let right = arr.length - 1;
//this while loops makes sure that I dont return two zeros, left has to be less than right
  while (left < right) {
    // here we add the two variables
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      // if the sum equals our desired amout we return an array of the two variables
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      // if the sum is greater than zero that means the number on the right is too large 
      // so we count down from the right
      right--
    } else {
      // if the sum is lower than zero we count up from the left
      left++
    }
  }
}
/**
 * Accepts a sorted array, and counts the unique values in the array.
 * @param {array} a sorted array that might feature negative numbers.
 * @return {integer} A single integer that will reflect the amount of numbers that occur once.
 */

countUniqueValues = (arr) => {
  // checks to make sure theyre numbers in the array
  if (arr.length === 0) return 0

  // this variable will go up as the amount of unique numbers are identified.
  // I start the count at 1 because the array has at least one unique number if it has a length at all.
  let count = 1;

  // this variable will check against the item before it to see if they are the same.
  let secondNumber = arr[1]

  arr.map((x, i) => {
// this loop will check each item in the array
    // if x (which is the first number in the array) does not match the second
    // we know the second is unique
    if (x !== secondNumber) {
      // so add one to the unique count
      count= count+1
      //and move the checker forward in the array
      secondNumber = arr[i+2]
    } 
  })

  return count
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))