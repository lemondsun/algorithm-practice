// Break string up into an array of strings and assign to variable (arrString)
// loop through array and if iteration === " " then the next iteration .toUpperCase
// return mapped array .join()
const space = " ";
const spacePlaces = null;

const toJadenCase = (str) => {
  // return instead of creating a new variable to save space
  // split(" ") to break up the string into arrays
  // map through each array with the map function (word)
  return str.split(" ").map((word) => {
    // charAt(0).toUpperCase() takes the first letter in each string of word (from the map abpve)
    // concatnated with + word.slice(1)
    return word.charAt(0).toUpperCase() + word.slice(1);
    // the arrays are then put back together with .join(" ")
  }).join(" ")
  
}

let answer = toJadenCase("How can mirrors be real if our eyes aren't real");

console.log(answer)