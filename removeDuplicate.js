const removeDuplicate = (nums) => {
  let trackingNumber = nums[0];
  let unqNum = [nums[0]];
  let numsL = nums.length;

  nums.map((x) => {
    if (x !== trackingNumber) {
      unqNum.push(x)
      trackingNumber = x
    }
  });

  for (let i = 0; i < numsL; i++){
    nums.pop()
  };
  unqNum.map((x) => nums.push(x));

  return nums
};

console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]))