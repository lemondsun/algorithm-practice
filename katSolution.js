//Jason's solution is faster because he uses an object, which is O(1) lookup time
//Mine uses an array which is O(n) - not as fast!
//JS is not my forte, so naturally I default to declaring
//functions with the 'function' keyword

function vowelsToStars(myString){
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    //returns an array of letters made from the split string
    new_string = myString.split('')

    //basically implements a for loop, every item in new_string is now a "letter"
    //then the arrow function says, if the letter is in the list of vowels,
    //return a star
    //else return the letter
    let answer = new_string.map((letter) => {
        if (vowels.includes(letter))
            return '*';
        else
            return letter;
    });
    console.log(answer.join(""));
}

vowelsToStars('apple');
//should print out: *ppl*
