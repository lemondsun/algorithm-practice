/**
 * @param {number} x
 * @return {number}
 * Given a 32-bit signed integer, 
 * reverse digits of an integer.
 */
var reverse = function(x) {
// make sure the end number is not more than 32-bit
  const limit = 2147483648;

  // check to see if argument is a negative or a positive
  // if argument is a make k a negative 1 as it will be used to multipy the 
  // number returned from the line of code below
  const k = x < 0 ? -1 : 1;

  //the code below: turns x into a positive Math.abs(x)
  // then turns it into a string .split('')
  // then reverses it .reverse()
  // then puts it back together .join()
  // then turns it back into a number Number()
  // and final saves that value to the variable n
  const n = Number(String(Math.abs(x)).split('').reverse().join(''));

// finally we check if the variable is more than 32 -bits
  // if so then we multiply it by zero
  // if not then we multiply it by k to make it match a positive or negative value
  return n > limit ? 0 : n * k;
 
};

console.log(reverse(-123))

