/* sudo code
make objects out of both sides scoring
make empty arrays to save the values collected from the objects
map through the given sentence if element belongs to either object push to coresponding array
reduce array to get the total sum of all the elements from each side
return the the winner based on sum of arrays
*/

const alphabetWar = (fight) => {

  //make objects out of both sides scoring
  const leftSide = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    undefined: 0
  }

  const rightSide = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  }
//make empty arrays to save the values collected from the objects
  let leftScore = [];
  let rightScore = [];
//map through the given sentence if element belongs to either object push to coresponding array
  fight.split('').map(ele => {
    if (leftSide[ele]) {
      leftScore.push(leftSide[ele]) 
    }
    if (rightSide[ele]) {
      rightScore.push(rightSide[ele])
    }
  })
  //reduce array to get the total sum of all the elements from each side
  if (leftScore.reduce((a,b) => a+b, 0) > rightScore.reduce((a,b) => a+b, 0)) {
    return 'Left side wins!'
  } else if (leftScore.reduce((a,b) => a+b, 0) < rightScore.reduce((a,b) => a+b, 0)) {
    return 'Right side wins!'
  } else {
    return "Let's fight again!"
  }
}

console.log(alphabetWar("cghvhpwulfy"))