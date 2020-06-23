/**
 * create a function that takes a list of non-negative integers and strings 
 *  returns a new list with the strings filtered out.
 */

filter_list = (l) => {
  answerList = [];
  dumpList = []
  l.map((x) => {
  typeof(x) === "string" ? dumpList.push(x) : answerList.push(x) 
  })
  return answerList
}

console.log(filter_list([1,2,'a','b']))