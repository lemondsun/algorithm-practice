/**
 * This functions takes two arguments compares them and tells us if they have they have frequency of elements.
 * @param {integer} numOne 
 * @param {integer} numTwo 
 * @returns {boolean}
 */

const sameFrequency = (numOne, numTwo) => {
  // first check to make sure that both numbers  are the  same length
  if (numOne.length !== numTwo.length) return null;

  // make two variables to save the numbers and their count from each param
  let arg1Count = {}
  let arg2Count = {}

  // String(numOne) will convert the integer into a string
  // Array.from() method creates a new Array instance from an array-like or iterable object like the string
  // here we have an array of string numbers ('1' instead of 1)
  // I could turn the string into numbers with the Number method but it is not needed
  // all we need to know is the frequency of occurences which works with strings
  Array.from(String(numOne)).map((x) => {
    // here i state that the element is equal to the previous value in the object plus1
    // or initialize it with a value of a value of 1
    arg1Count[x] = (arg1Count[x] || 0) + 1
  })

  Array.from(String(numTwo)).map((x) => {
    arg2Count[x] = (arg2Count[x] || 0) + 1
  })

  //now I loop through oneof the objects and check if each element exist in the other
  // and if they share the same value. If either checks fail return false
  for(let x in arg1Count) {
    if ((!(x in arg2Count)) && arg1Count[x] !== arg2Count[x]) return false;
  }
  //if all checks pass return true
  return  true
}

console.log(sameFrequency(185,281))