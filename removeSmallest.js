const removeSmallest = (arr) => {
  //uses Math.min to find the lowest number from the arr
  let lowestNumber = Math.min(...arr);
  // now that I have the lowest number I use indexOf to find the index of that number
  let lowestIndex = arr.indexOf(lowestNumber);
  //I make a copy of the original arr
  let newArr = [...arr];
//I use splice to remove the lowest number by its saved index
  newArr.splice(lowestIndex,1)

 return newArr
}

console.log(removeSmallest([5,3,2,1,4]))