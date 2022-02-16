# Algorithm Practice

Algorithm Practice is a repository where I save exercises and problems that I have worked on.
All of the work saved in this repository will be in the Javascript language.
My goal is to document my growth as a programmer, adopting better practices as it pertains to problem-solving.

## Example

```javascript

/**
 * return strings in friends param that has four letters
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
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
