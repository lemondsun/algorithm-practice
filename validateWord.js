const validateWord = (wrds) => {
  letterCounter = {}
  let even = false;
  let odd = false;

    wrds.split('').map((letter) => {
      letterCounter[letter.toLowerCase()] ?
        letterCounter[letter.toLowerCase()] = letterCounter[letter.toLowerCase()] += 1
        :
        letterCounter[letter.toLowerCase()] = 1

    })
  for (const key in letterCounter) {
    letterCounter[key] % 2 === 0 ?
      even = true
      :
      odd = true
}
return (even !== odd)
}

console.log(validateWord("abcabcd"))