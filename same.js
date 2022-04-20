// const same = (arr1, arr2) => {
//   if (arr1.length != arr2.length) {
//     return false
//   }
//   let returnArr = []

//   arr1.map((x) => returnArr.push(x * x));

//   arr2.map((x) => {
//     let squaredCheckIndex = returnArr.indexOf(x)
//     console.log(squaredCheckIndex)
//     if (squaredCheckIndex != -1) {
//       returnArr.splice(squaredCheckIndex,1)
//     } else {
//       return false
//     }
//   })
//   console.log(returnArr)
//   return (returnArr.length ===0)
// }

// console.log(same([1,2,1],[4,1,4]))

function fizzBuzz(n) {

  for (let i = 1; i <= n; i++) {
    let str = "";

    if (i % 3 === 0) str += "fizz"
    if (i % 5 === 0) str += "buzz"
    if (str === "") str = i;
  
    console.log(str);
  }

}



fizzBuzz(15)