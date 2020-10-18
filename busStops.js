
/**
 * returns a positive integer
 * @param {Array} variable - An array of tuples
 * @return {integer} - the sum of all the tuples in the paramiter
 */
const busStop = (variable) => {
  let bus = 0;
  variable.map(x => bus += x[0] - x[1])
  console.log(bus)
}

busStop([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])