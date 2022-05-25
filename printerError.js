const printerError = (string) => {
  let stringCount = string.length;
  let errors = 0;

  for (let i in string) /[n-z]/ig.test(string[i]) && errors++;


  return `${errors}/${stringCount}`
};

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))