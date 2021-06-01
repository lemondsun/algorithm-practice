/**
 * turns an Array of hashes into a string.
 * @param {Array} hashes - An array of names of simpsons characters or an empty array.
 * @returns {string} - The list of names presented in order and seperated by commas and ampersand or empty string.
 */

const stringSimpsons = (names) => {

  return names.reduce(function (prev, current, index, array) {
    //adds the current element to empty string
    if (index === 0){
      return current.name;
    }
    //if at the end array add & then last element to string
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    }
      //add element to string with trailing comma
    else {
      return prev + ', ' + current.name;
    }
    //creates a blank string to add the names to.
  }, '');
}

console.log(stringSimpsons([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))