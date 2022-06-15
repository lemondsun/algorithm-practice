const lengthOfLongestSubstring = (s) => {
  let stringArray = s.split('');
  if(stringArray.length===0) return 0
  //need to keep track of the longest strinbg
  let longestString = 1;
  //need to keep track of the length of the sub Im counting
  let currentSub = 0;
  //keep track of all the unique characters
  let uniqueCheck = [];

  stringArray.map((x, i) => {
    uniqueCheck.push(x)
    for (let j = i + 1; j < stringArray.length; j++) {
      if (uniqueCheck.includes(stringArray[j])) {
        uniqueCheck = [];
        currentSub = 0;
        break
      } else {
        uniqueCheck.push(stringArray[j]);
        if (uniqueCheck.length > longestString) longestString = uniqueCheck.length
      };
    };
  });

  return longestString
};

console.log(lengthOfLongestSubstring("pwwkew"));
