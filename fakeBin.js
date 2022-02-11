  //turn string into an array
  //loop through array
  //parse iterate and turn to 1,0 based on the value
  //use template literal to remove commas
const fakeBin = (str) => str.split('').map((x) => parseInt(x) >= 5 ? 1 : 0).toString().replace(/,/g, '')

console.log(fakeBin('45385593107843568'))