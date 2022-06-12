const removeDuplicate = (arr) => {
  let trackingNumber = arr[0];
  let returnArr = [arr[0]];

  arr.map((x, i) => {
    if (x !== trackingNumber) {
      returnArr.push(x)
      trackingNumber = x
    }
  });

  for (let i = returnArr.length; i < arr.length;i++) returnArr.push('_')

  return returnArr
};

console.log(removeDuplicate([1,1,2]))