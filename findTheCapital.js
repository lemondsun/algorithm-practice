const capitals = function (word) {
  let wordArr = word.split("")
  let lowerWordArr = word.toLowerCase().split("")
  let answer =  []
  let result = lowerWordArr.map((letter, index) => {
  if (letter !== wordArr[index])
  answer.push(index)
  })
  return answer
};
  
let answer = capitals('CodEWaRs')
console.log(answer)