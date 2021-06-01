const domainName = (url) => {
//split the url and turn it into an array
  let splitSting = url.split(/[.\n///]+/)
  // create a variable to edit based on the url
  let domain;
  // create an array of web standards that are always in front of the domain name
  let webProCals = ['http:', 'https:', 'www']
  // if they're no web protocols return the first item in the splitString
  if (splitSting.includes(webProCals) === false) {
    domain=splitSting[0]
  }
  // if they're web protocols save the next item in the array to the domain variable
  for (let i = 0; i < splitSting.length; i++) {
    if (webProCals.includes(splitSting[i])) {
      domain=splitSting[i+1]
    }
  }
return domain
}

// clever and clear solution from codewars
function domainNameTwo(url) {
  // use replace to remove any of the web protocols
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  // with any web protocols removed from the front of the string
  // split the remaining string and return the first item, which is the domain name
  return url.split('.')[0];
};



console.log(domainName("https://github.com/carbonfive/raygun"))