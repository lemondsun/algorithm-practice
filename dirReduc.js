const dirReduc = (arr) => {
  keys = {
    NORTH: "SOUTH",
    SOUTH: 'NORTH',
    WEST: 'EAST',
    EAST: 'WEST',
  }

  results = []
  arr.map((direction, i) => {
    let push = () => results.push(direction)
    results.push(arr+1)
    results[i] === keys[arr[i + 1]] ?
      results.pop()
      :
      push
  })
  

  return results
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))