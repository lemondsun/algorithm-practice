const countSheep = (arr) => arr.filter((x) => x == true).length
  // ans = 0
  // arr.map((x) => x === true ? ans = ans + 1 : null)
  // return ans
  //  arr.filter((x) => x == true).length
  

console.log(countSheep([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ]))