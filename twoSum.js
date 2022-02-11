/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Given an array of integers, 
 * return indices of the two numbers such that
 *  they add up to a specific target.

You may assume that each input would have 
exactly one solution, 
and you may not use the same element twice.
 */
var twoSum = function (nums, target) {
  // create a new Map obj
  let numberIndex = new Map();
  // create an empty array to push solutions into
  let ans = []

  // loop through the orginal array
  for (let i = 0; i < nums.length; i++) {
    // save each number in the array to a variable that we can use
    // each time the loop iterates
    let num = nums[i]
    // make variable with value of target minus the number we are iterating
    // this gives us the difference/ the number needed to add to our...
    // num variable to reach the target value
    let complement = target - num;

    if (numberIndex.has(complement)) {
      // .get() is a Map method
      // it returns the value associated to the key, or undefined if there is none.
      ans[0] = numberIndex.get(complement)
      ans[1] = i

      return ans
    }
    // else use the Map method .set to add the num and its index as key,value for Map
    // you do this so that the next iteration now has a new 
    // value to check against in the if statement above
    numberIndex.set(num, i)
  }
  return ans
};

const newTwoSum = (nums, target) => {
  ans = [];
  nums.map((x, i) => {
    nums.map((a, n) => {
      i !== n && x + a === target && ans.length !==2 && ans.push(i, n)
    })
  })
  return ans
}
console.log(newTwoSum([3,2,4],6))