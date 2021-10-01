

/**
 * @param {string}
 * @returns {string}
 * Given a string replace all vowels with assigned integer
 * 
 */

 let vowelList = {
  a : 1,
  e : 2,
  i : 3,
  o : 4,
  u : 5,
 }

let numberList = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
 }
encode = (x) => {
// create an array to loop through with the given string
  let sentenceArray = x.split('')
// map through array returning the value of the letter if its not in vowelList
// or the value of the letter that matches in vowelList
  let newSentence = sentenceArray.map((letter) => {
    return vowelList[letter] || letter
  }
  )
// return the edited array joined as a string
  return newSentence.join('')
}

/**
 * @param {string}
 * @returns {string}
 * Given a string with the vowels replaced by decoded numbers, replace numbers with vowels
 */

decode = (x) => {
  let sentenceArray = x.split('')
  let newSentence = sentenceArray.map((letter) => {
    return numberList[letter] || letter
  })
  return newSentence.join('')
}

console.log(encode('hello'))
console.log(decode("h3 th2r2"))