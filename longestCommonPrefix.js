/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if(strs.length == 0) {
    return "";
}

//save first word from the array
  let str = strs[0];


   for (const word of strs) {
        while (word.indexOf(str) != 0) {
            str = str.substring(0, str.length - 1);              // remove one character from the end
            if (str === "")
                break;
        }
    }
    return str;
};


console.log(longestCommonPrefix(["flooo","flow","flight"]))