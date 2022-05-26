/**
 * given a string return a string that follows the pattern of:
 * first new letter of given string is capitalized and followed
 * by lowercase versions of the same letter. With the count of the pair matching 
 * what index that letter has in the original string.
 * @param {*} string 
 * @returns string
 */

const accum = (string) => {
//save the first letter of the string as a capital letter to return
  let rString = `${string[0].toLocaleUpperCase()}`;
//cut the first letter out of the string to iterate through the rest
  let letterCount = string.slice(1);
//create a counter to tell the loop how many times to repeat  
  let repeatCount = 1;

  for (let letter in letterCount) {
    for (let i = 0; i <= repeatCount; i++) {
      //if its the firs letter make uppercase if not make it lowercase
      i === 0 ?
        rString = `${rString}-${letterCount[letter].toLocaleUpperCase()}`
        :
        rString = `${rString}${letterCount[letter].toLowerCase()}`
    }
    //increase the count for the next letter
    repeatCount++
  }
  return rString
}

console.log(accum("RqaEzty"))