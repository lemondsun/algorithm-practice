const high = (str) => {
  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  scoreChart = {};
  alphabet.map((x, i) => scoreChart[x] = i + 1);
  
  stringArray = str.split(" ").map((x) => x.split(''))
  letterValue = stringArray.map((x) => x.map((x) => scoreChart[x]))
  scores = letterValue.map((x) => x.reduce((c, n) => c + n))

  highScore = scores.indexOf(Math.max(...scores))
  
  
  return(stringArray[highScore].join(''))
}

high('man i need a taxi up to ubud')