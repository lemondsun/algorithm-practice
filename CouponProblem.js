function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode === correctCode && Date.parse(currentDate) < Date.parse(expirationDate))
  return  true 
  else
    return false

}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))