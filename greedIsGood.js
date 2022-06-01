const score = (dice) => {
  let count = {};
  let score = 0;

  dice.map((x) => {
    count[x] ? count[x] = count[x] + 1 : count[x] = 1
  });

  for (let roll in count) {
    if (count[roll] < 2 && 5 % roll === 0) {
      roll === '5' ? score = score + 50 : score = score + 100
    };
    if (count[roll] > 2 && roll !== '1' && roll !== '5') {
      score = score + roll * 100;
    };
    if (roll === '1') {
      if (count[roll] === 2) score = score + 200;
      if (count[roll] === 3) score = score + 1000;
      if (count[roll] === 4) score = score + 1100;
      if (count[roll] === 5) score = score + 1200;
    };
    if (roll === '5') {
      if (count[roll] === 2) score = score + 100;
      if (count[roll] === 3) score = score + 500;
      if (count[roll] === 4) score = score + 550;
      if (count[roll] === 5) score = score + 600;
    };
  };
  return score
};

console.log(score([1, 2,3, 4, 5]));