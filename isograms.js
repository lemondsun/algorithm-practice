/**
 * A function that determines if letters show up twice in a string.
 * @param {string} can be an empty string
 * @returns {boolean} true or false
 */

let isIsogram = (str) => {
// set an empty object to assign each letter in string as a key.
  let alphabet = {}
// set an boolean to return at the end and adjust based on loop through argument.
  let isogram = true
  // turn string to an array and loop through each letter.
  str.toLowerCase().split('').forEach(letter => {
  // if letter has been saved as a key already change isogram variable value to false.
    if (alphabet.hasOwnProperty(letter)) {
      isogram = false
    } else {
      alphabet[letter] =1
    }
  })
return isogram
}

console.log(isIsogram(""))