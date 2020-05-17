/**
 * @param {number} x
 * @return {boolean}
 * Determine whether an integer is a palindrome.
 * An integer is a palindrome when it reads the same backward as forward.
 */
var isPalindrome = function(x) {
  if (x.toString().split('').join('') === x.toString().split('').reverse().join('')) {
     return true
  } else 
    return false 
};

console.log(isPalindrome(-121))