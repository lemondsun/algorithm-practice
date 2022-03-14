/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = (strs) => {
  prefixsCounter = {}
  highestCount = 0;
  highestPrefix = '';
  //save first 2, 3, 4 letter combination of the words 
  //even if the prefix is a double it only returns a count of one bc each new time replaces the last
  strs.map((x) => {
      prefixsCounter[x.substring(0)] = 0
      prefixsCounter[x.substring(0, 2)] = 0
      prefixsCounter[x.substring(0, 3)] = 0
    prefixsCounter[x.substring(0, 4)] = 0
  })
  //now that all the prefixs are saved loop through the  words again
  //this time raise the count if the prefixs match
  strs.map((x) => {
    for (const prefix in prefixsCounter) {
      if (prefix === x.substring(0, 4)) {
        prefixsCounter[prefix] += 1
      } else if (prefix === x.substring(0, 3)) {
        prefixsCounter[prefix] += 1
      } else if (prefix === x.substring(0, 2)) {
        prefixsCounter[prefix] += 1
      }else if (prefix === x.substring(0)) {
        prefixsCounter[prefix] += 1
      }
    }
  });
  //loop through the object and save the highest valued key
  for (const prefix in prefixsCounter) {
    if (prefixsCounter[prefix] > highestCount) {
      highestPrefix = prefix
      highestCount = prefixsCounter[prefix] 
    }
  }
  return highestPrefix
};


console.log(longestCommonPrefix(["a","ab"]))