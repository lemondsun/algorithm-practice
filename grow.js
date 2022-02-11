//create a variable for the total
//loop through the array and multiple each iteration with the one next
//use that result to update the total variable
//return total
const grow = (nums) => nums.reduce((x,i)=> x*i )

console.log(grow([1, 2, 3, 4]))