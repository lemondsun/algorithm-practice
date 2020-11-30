/**
 * This function will take two params an array and a number.
 * @param {array} an ordered arra of integer that canfeature negative integers
 * @param {integer} a positive integer
 * @return {integer} the max sum of n number of indices from the param array
 */

maxSubarraySum = (arr, num) => {
  //if the array  is not long enough return null.
  if (arr.length === 0) null

  //a changing variable that will reflect the largest sum 
  //as we loop through the array.
  let maxSum = 0;
  //The first sum of n number of indices to shape the window.
  let tempSum = 0;

  //this for loop creates the first sum and the first window.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum;

  //this loop starts at the end of the first window (let i = num) 
  for (let i = num; i < arr.length; i++) {
    //here we slide the window which can be represented by tempSum
    //tempSum - arr[i - num] deletes the first indice in the  "window"
    //+ arr[i] moves the window forward by adding the indice after the previous window
    tempSum = tempSum - arr[i - num] + arr[i];
    //here we use Math.max to find the max between the new window and the previous high
    //the higher of the two will be saved to maxSum
    maxSum = Math.max(maxSum, tempSum);
  }
 
  return maxSum;
}

console.log(`this is the answer ${maxSubarraySum([2,6,9,7,1,8,5,6,3],3)}`)