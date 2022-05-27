const rentalCarCost = (days) => {
  let total = (days * 40);

  if (days > 2 && days < 7) {
    total = total - 20
  } else if (days > 6) {
    total = total - 50
  };

  return total;
};

console.log(rentalCarCost(3))