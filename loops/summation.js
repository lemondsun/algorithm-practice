/**
 * summation
 * Write a program that finds the summation of every number from 1 to num.
 *  The number will always be a positive integer greater than 0.
 * @param {integer}
 * @returns{integer}
 */
{/*
  needs a counter that will represent the sum of each added number,
  counting up to he parameter number.
  needs a loop that counts up from 1 to param and adds each number to the sum of the numbers before it.
*/}

const summation = (num) => {
//counter
  let sum = 0;
  
  for (let i = 1; i <= num; i++){
    sum +=i
  }

  return sum
}

console.log(summation(8))