

abbreviate = (sentence) => {
  let char = /([^a-z])/i
  let listOfWords = sentence.split(char)
  console.log(listOfWords)
  
//   let numberOfLetters = 0
//   abbrWords = listOfWords.map((letter, index) => {
    
//     if (index !== 0 && !char.test(letter)) {
//       numberOfLetters = numberOfLetters + 1
//     }if (char.test(letter)) {
//         return(numberOfLetters,listOfWords[index-1],letter)
//       } 
//     // if (index === 0) {
//     //   return letter
//     // }else if (index !== 0 && !char.test(letter)) {
//     //   numberOfLetters= numberOfLetters+1
//     // }
//     // if (char.test(letter)) {
//     //   numberOfLetters = 0
//     //   return(numberOfLetters,listOfWords[index-1],letter && numberOfLetters = 0)
//     // } 

//   })

// //   let wordsestructed = listOfWords.map((word) => {
// //     let char = /[\.\-_! ]/
// //       return(char.test(word) ? word.split(/[\.\-_!]/) : word)
    
// //   })
// // console.log(wordsestructed)
// //   abbrWords = wordsestructed.map((word) => {
// //     return(word.length <= 3 ?  word :`${word.split("")[0]}${word.length}${word.split("")[word.length-1]} `)
// //   })
// //   return abbrWords.join(" ")

}

console.log(abbreviate("elephant-rides are really fun!"))