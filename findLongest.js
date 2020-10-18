/**
 * Find the number with the most digits.
 * If two numbers in the argument array have the same number of digits
 * return the first one in the array.
 * @param {array} array 
 */

const findLongest = (array) => {
  return array.reduce((a, b) => (a.toString().length > b.toString().length && a.toString().length !== b.toString().length) ?
    a : b)
}

console.log(findLongest([8, 900, 500]))