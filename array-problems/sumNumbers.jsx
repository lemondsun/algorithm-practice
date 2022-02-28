/**
 * Given an array of numbers, return the sun of array
 * @param {array} numbers 
 * @returns {integer} number
 * 
 * Problem: add all the numbers in the array .
Immediate thought: loop through array adding each number to the next saving the result to a variable that updates with each loop.
Use reduce to add the array and return the sum (reduce)
 */

const sum = (numbers) => {

  return numbers.reduce((a,x)=>{
   return a+x
  },0)}