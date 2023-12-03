/**
 * Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
 */

const neutralize = (s1, s2) => {
  let bothStrings = `${s1}${s2}`;
  let isIndexPositive = '+';
  let isIndexNegative = '-';
  let returnString = '';

  //loop through bothStrings finding index 0 and bothStrings.length/2+1
  for (let i = 0; i < bothStrings.length / 2; i++) {
    
    if (bothStrings[i] === isIndexPositive) {
      bothStrings[bothStrings.length / 2 + i] === isIndexPositive
        ? (returnString = `${returnString}+`)
        : (returnString = `${returnString}0`);
    }
    if (bothStrings[i] === isIndexNegative) {
      bothStrings[bothStrings.length / 2 + i] === isIndexNegative
        ? (returnString = `${returnString}-`)
        : (returnString = `${returnString}0`);
    }
  }
  return returnString;
};

console.log(neutralize('-++-', '-+-+'));
