iqTest = (numbers) => {
  ints = numbers.split(' ')
  evenResp = ints.map((int, index) => {
    if (parseInt(int) % 2 === 0) {
      return(index + 1)
    }
  })
  oddResp = ints.map((int, index) => {
    if (parseInt(int) % 2 !== 0) {
      return(index + 1)
    }
  })

  if (evenResp.length > 2) {
    console.log(oddResp)
  } else 
    console.log(evenResp)
  
}

iqTest("1 2 2")