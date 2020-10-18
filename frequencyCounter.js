const same = (arr1, arr2) => {
  //first check to see if both arrays are the same length.
  if (arr1.length !== arr2.length) {
    return false;
  }
  // loop through the second array and check if it has the arr1[i] **2 in its index
  // if not return false
  // if it is splice that item from the second arr so that it wont be double counted

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

// --------------- REFACTORED --------------------------

const sameSquared = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // create objects to save the values from the arguments
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // loop through arr2 and save the value as a key in frequencyCounter2
  //if that key already exist add 1 to it's value, if not start it's value at 1
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // loop through arr1 and save the value as the key in frequencyCounter1
  //if that key already exist add 1 to it's value, if not start it's value at 1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let key of frequencyCounter1) {
     // check if index from frequencyCounter1 squared is in frequencyCounter2
  // if not return false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};
