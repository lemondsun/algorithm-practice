highLow = (n) => {
  list = n.split(" ").map(number => parseInt(number))
  answer = [Math.max(...list), Math.min(...list)]
  return answer.join(" ")
}
console.log(highLow("1 2 3 4 5"))