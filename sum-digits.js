sumDigits = (number) => {
  digits = number.toString()
  sum = 0;
  let finalSum;
  for (i = 0; i < digits.length; i++) {
    if (parseInt(digits.charAt(i)) === NaN) {
      // finalSum = sum += parseInt(digits.charAt(i++))
      console.log(i)
    } else {
      finalSum = sum += parseInt(digits.charAt(i))
    }
  }
  return finalSum
};

let answer = sumDigits(99)
console.log(answer)