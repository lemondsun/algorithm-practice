const topThreeWords = (str) => {
  let count = {};
  let first = '';
  let second = '';
  let third = '';
  let returnArray = [];

  str.split(' ').map((word) => {
    if (/[a-z]/ig.test(word)) {
      console.log(word.replace(/[/0-9!@#\$%\^\&*\)\(+=._-]/g, ''))
      word = word.replace(/[/0-9!@#\$%\^\&*\)\(+=._-]/g, '')
      count[word] ? count[word] = count[word] + 1 : count[word] = 1
    };
  })
  for (const word in count) {
    if (first.length === 0) {
      first = word;
    } else if (count[first] < count[word]) {
      first = word;
    }
  }

  for (const word in count) {
    if (word !== first) {
      if (second.length === 0) {
        second = word;
      } else if (count[second] < count[word]) {
        second = word;
      }
    }
  }

  for (const word in count) {
    if (word !== first &&  word !== second) {
      if (third.length === 0) {
        third = word;
      } else if (count[third] < count[word]) {
        third = word;
      }
    }
  }

  first.length != 0 && returnArray.push(first);
  second.length != 0 && returnArray.push(second);
  third.length!=0 && returnArray.push(third)

  return returnArray;
}

console.log(topThreeWords("  //wont won't won't"))