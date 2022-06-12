const strStr = (haystack, needle) => {
  if (needle.length === 0) {
    return 0
  };
for(var i = 0; i < haystack.length; i ++) {
  if (haystack.slice(i, i + needle.length) === needle) {
    return i
  };
  };

  return -1;
};

console.log(strStr("hello",'ll'))