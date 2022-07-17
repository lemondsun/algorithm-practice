const anagramCheck = (string, secondString) => {

  if (string.length !== secondString.length) {
    return false
  }
  //create a key from first string
  let key = {};
  let workingString = string.split('')
  let checkString = secondString.split('')

  workingString.map((letter) => {
    key[letter.toLowerCase()] ? key[letter.toLowerCase()] + 1 : key[letter.toLowerCase()] = 1
  });

  // for (const letter in checkString) {
  //   console.log(letter)
  //   key[letter.toLowerCase()] ? key[letter.toLowerCase()] -1: null
  // }

  checkString.map((letter) => {
        key[letter.toLowerCase()] ? key[letter.toLowerCase()] = letter.toLowerCase() -1: null
  })

  for (const element in key) {
    console.log(key[element])
    if(key[element]>0 ) return false
  }

  return true
}

// console.log(anagramCheck('hello', 'p'))
// const findIndex = (arr, val) => {
//   let targetIndex = 0;
//   for (let i = 0; i <= arr.length; i++){
//     if (arr[i] < val || arr[i] === val) targetIndex = i
//     if(arr[i]===arr.length) targetIndex = arr.length
//   };
  
//   return targetIndex;
// }

// console.log(findIndex([1, 2, 4, 5, 6], 5));

const oddLetter = (str) => {
  key = {
  };

  const checkString = str.split('');

  checkString.map((letter, i) => {
    i % 2 != 0 &&
      key[letter] ? key[letter] + 1 : key[letter] = 1
  })

  return key

};

console.log(oddLetter('abblosjjjfe'));