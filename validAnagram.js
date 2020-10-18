/**
 * Checks if params are anagrams.
 * Given two strings determine if they both have identical make up of letters,
 * even if they're in different orders.
 * @param {string} str1 string with no symbols or spaces.
 * @param {string} str2 string with no symbols or spaces.
 * @Return true or false
 */

const validAnagram = (str1, str2) => {
  // save both strings as arrays so that I can iterate through them
  firstString = str1.split("");
  secondString = str2.split("");

  // check that they are the same length
  if (firstString.length !== secondString.length) {
    return false;
  }
  // create an object to save the first sentence
  // so I can have an key and value stating how many times a letter appears
  stringSample = {};
  // create a variable to return true or false based on the ternary result
  answer = true;

  // map through the first string to create an object out the items in the string array
  // saving each letter and counting how many times the occur
  firstString.map((x) => {
    stringSample[x] = (stringSample[x] || 0) + 1;
  });

  // map through the second string to check if the item is in the first string
  // and check if it has not appeared more times in the second string than the first
  // if both conditions are met subtract  one from the value of the item in the object and move on
  // if not change the answer's value from true to false
  secondString.map((x) => {
    stringSample[x] && stringSample[x] > 0
      ? (stringSample[x] = stringSample[x] - 1)
      // ternary operators cannot simply return false so I have to save its value to a variable
      : (answer = false);
  });

  return answer;
};

console.log(validAnagram("awesome", "awesom"));
