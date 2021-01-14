/*
loop over the longer string
loop over the shorter string
if the  characters dont match, break out of inner loop
if the characters match, keep going
if you complete the inner  loop and find a match increment the count of matches
return count
*/

let stringSearch = (longString, pattern) => {
  let patternCount = 0;
  // loop over the longstring, taking each letter and performing the following loop.
  for (let i = 0; i < longString.length; i++) {
    // with each iteration from the longstring we loop over the pattern so that we can check for it.
    for (let j = 0; j < pattern.length; j++) {
      // here i check each iteration of the pattern against the accumilating iterations of longstring
      // l === l, o === o, l === r the last check doesnt match so break
      // in this case longString[i + j] = longString[0], then longString[1], then longString[2]
      // because we are still in the first iteration from the first loop
      if (pattern[j] !== longString[i + j]) {
        break;
      }
      // here we set the condition that if the loop reaches the end of the string
      // that means the pattern matches so increase the count with patternCount+++
      if (j === pattern.length - 1) {
        patternCount++
      }
    }
  }

return patternCount
}

console.log(stringSearch('lorie loled', 'lol'))

