/**
 * return strings in friends param that have four letters
 * @param {array} friends 
 * 
 */

const friend = (friends) => {
  // create empty array to save correct names
  // map through param
  // find items with four letters
  // push to answer array
  // return answer array
  let ansArray = []

  friends.map((friend,index) => friend.split('').length ===4 && ansArray.push(friends[index]))
return ansArray
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))