const longestPalindrome = (s) => {
  let palindrome;
  let left = 0;
  let right = string.length;
  let string = s.split('');

  for (let i = 0; i < string.length; i++) {
    if (string[left] === string[right]) {
      palindrome = string.slice(left, right)
    } else {
      
    }
  }
}