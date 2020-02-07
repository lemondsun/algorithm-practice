// create a function that removes all the vowels from a string and replaces them with an *

// 1 create variable with vowels to check against array
// 2 first create array from argument
// 3 loop through array
// 4 if iteration in variable from step one change to * else keep the same
// 5 return array as a string

// step 1
const vowelMap = {
  a: '*',
  e: '*',
  i: '*',
  o: '*',
  u: '*'
}
noVowels = (str) => {
  // step 2
  let letterList = str.split("")
// step 3
  let newList = letterList.map((letter) => {
//  step 4
    // this is checking if the vowelMap has a key that matches the letter, if so it's returning the value for that key or else the original letter.
    return vowelMap[letter] || letter
  }
  )
  // step 5
  console.log(newList.join("")) 
}

noVowels("Hello")