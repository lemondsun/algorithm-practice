/**
 * @param {string[]} ideas
 * @return {string}
*/

const well = (ideas) => {
//counter for the good ideas
  ideaCounter = 0;
//loop through ideas, if iteration is 'good' add 1 to the ideaCounter
  ideas.map((x) => { if (x === 'good') { ideaCounter = ideaCounter + 1 } })
//return accordingly
  if (ideaCounter > 0 && ideaCounter < 3) {
    return 'Publish!'
  } else if (ideaCounter >= 3) {
    return 'I smell a series!'
  } else {
    return 'fail'
  }
}

console.log(well(['bad', 'bad', 'bad']))