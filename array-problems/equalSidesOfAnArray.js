/**
 * find the index at which the sum of all the integers before and after the index are equal
 * @param {integer} arr 
 * @returns{integer}
 */

function findEvenIndex(arr) {


  countFromRight = 0;
  //save the complete sum moving from left to right as countToRight
  countToRight = arr.reduce((s, n) => s + n, 0);
  console.log(countToRight)
  for (let i = 0; i < arr.length; i++) {
  console.log(countToRight -= arr[i]);
    // if (left === right) return i;
    // left += arr[i];
  }





}
findEvenIndex([1,2,3,4,3,2,1])