// Find Maximum and Minimum Values of a List

// to find the minimum we take to values from the same list and compare them
// one is dependent the other is static
// if the dependent num is smaller it stays the same
// if it is larger the static number from the list replaces it
// this happens to each number in the loop until we have the min
let min = function (list) {
  // assign the first item on the list to min
  let min = list[0];
  // loop through list
  for (let i = 0; i < list.length; i++){
    // assign iteration of from list to cur
    let cur = list[i];
    // if cur (iteration from the list) is smaller than min so far
    // replace the min with cur
    if (cur<min) min=cur;
  }
  return min;
}

// to find the max from a list I will have two numbers from the list compare themselves to each other
// the larger of the two will replace the smaller in a variable
// until I get through the list
let max = (list) => {
  // create variable that I will check to see if it is larger
  let main = list[0];
  // map through list
  ans = list.map((item) => {
    // if iteration more that main
    // change main to iteration
    item>main ? main=item : main=main
  })
console.log(main) 
}
  


max([4,6,2,1,9,63,-134,566])