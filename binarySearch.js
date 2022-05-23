let binarySearch = (array, value) => {
//create a pointer for the start of the array
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor(array.length / 2);

  while (left < right && array[middle] !== value) {
    value < array[middle] ?
      right = middle - 1
      :
      left = middle + 1
    middle = Math.floor((left + right) / 2);
  }
  return array[middle] === value ? middle : -1;
};

console.log(binarySearch([1,2,3,4,5],2))