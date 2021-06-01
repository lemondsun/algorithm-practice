/**
 * returns a boolean of true or false based on square eval
 * @param {integer}
 * @returns {boolean}
 */

let isSquare = (n) => {
  //check if n equals 0 if so return true
  if (n === 0) return true
  //if n divided by the square root of n (Math.sqrt(n)) has no remainder then its a square number
  let answer = n % (Math.sqrt(n)) === 0 ? true : false
  return answer
}

console.log(isSquare(26))