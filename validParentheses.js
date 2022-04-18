/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  //I need all examples of the brackets to test against
  let openingList = [
    '(',
    '{', 
    '[',
  ];
  let closingList = [
    ')',
    '}',
    ']'
  ]

  let openBracketCheck = [];
  let closeBracketCheck = [];

  let elementList = s.split('')

  let valid = true

  elementList.map((element) => {
    if (openingList.includes(element)) {
      openBracketCheck.push( openingList.indexOf(element))
    }
  })
  
  elementList.map((element) => {
    if (closingList.includes(element)) {
      closeBracketCheck.push( closingList.indexOf(element))
    }
  })

  openBracketCheck.map((x, i) => {
    console.log(closeBracketCheck[i],x)
    if (closeBracketCheck[i]!== x) valid = false
  }
  )

  // //I need to test each pair of symbols to see if they're in the bracketList
  // s.split('').map((x, i) => {
  //   //here I make sure x is even and not the last element in the array
  //   if (i % 2 === 0 && i < s.split('').length - 1&& valid===true) {
  //     //here's the check if the two elements are in the bracketList
  //     if (bracketList.includes(`${x}${s.split('')[i + 1]}`) === false) valid = !valid 
  //   }
  // });
  
  return valid
};

console.log(isValid("([)]"))