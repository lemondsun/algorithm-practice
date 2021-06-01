/**
 * Divides an a array
 * @param {Array} list - at least two elements to be divided.
 * @return {Array} - all of the different groupings of the elements from the parameter.
 */

let partList = (arr) => {
  a = new Array(arr[0])
  partedArray = arr.map((element, index) => {
    console.log(element,)
    if (element === a[0]) {
      return a
    } else if (element !== a[0]) {
      for (i = 1; i <a.length; i+1) {
      return  a.push(arr[i])
        
  }
  
    }
    
  })
  // for (i = 0; i <a.length; i+1) {
    
  // }
  return partedArray
}
console.log(partList(["az", "toto", "picaro", "zone", "kiwi"]))