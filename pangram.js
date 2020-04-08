isPangram = (sentence) => {
  // list all the letters of the alphabet to reference
  let alphabet = {
    a: 1,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 1,
    g: 1,
    h: 1,
    i: 1,
    j: 1,
    k: 1,
    l: 1,
    m: 1,
    n: 1,
    o: 1,
    p: 1,
    q: 1,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 1,
    w: 1,
    x: 1,
    y: 1,
    z: 1
  }
  // the counter that will rise as letters are found in the sentence
   alphabetCount = 0
  
  /**
   * loop through the sentence
   * if letter in sentence raise the count by one
   * delete letter from alphabet to avoid double counting
   */
  for (i = 0; i < sentence.split('').length; i++) {
    if (alphabet[sentence.toLowerCase.split('')[i]] ) {
      alphabetCount += 1,
      delete alphabet[sentence.toLowerCase.split('')[i]]
    }
  }
  if (alphabetCount === 26) {
    return true
  } else {
    return false
  }
}
let string = "This is not a pangram."
// let string = "The quick brown fox jumps over the lazy dog."
let answer = isPangram(string)
console.log(answer)