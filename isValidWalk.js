/**
 * Given some amount of directions, tell the user true if directions take
 * ten minutes and end where they began.
 * Each direction step is one minute.
 * 
 * @param {array} walk 
 * @returns boolean
 */

const isValidWalk = (walk) => {
  //check to make sure they're ten steps 
  if (walk.length !== 10) return false;
//counter to keep track of how many times I go in a direction
  directions = {
    n: 0,
    s: 0,
    e: 0,
    w: 0
  };
//increase the count for each direction
  for (let i = 0; i < 10;i++) {
      walk[i] === 'n' && directions.n++;
      walk[i] === 's' && directions.s++;
      walk[i] === 'w' && directions.w++;
      walk[i] === 'e' && directions.e++;
  };
//decrease the count for each direction
for (let i = 9; i >= 0;i--) {
      walk[i] === 'n' && directions.s--;
      walk[i] === 's' && directions.n--;
      walk[i] === 'w' && directions.e--;
      walk[i] === 'e' && directions.w--;
  };
//to end where I began each direction needs to be countered
  //so there should be 0 in every direction count
  for (let direction in directions) {

    if (directions[direction] > 0) return false
  };
  return true;
};

console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))