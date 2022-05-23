/**
 * Complete the function so that it finds the 
 * average of the three scores passed to it
 * and returns the letter value associated with that grade.
 * 
 * @param {integer} s1 
 * @param {integer} s2 
 * @param {integer} s3 
 * @returns {string}
 */

const getGrade = (s1, s2, s3) => {
  let average = Math.floor((s1 + s2 + s3) / 3)
  let grade;
  
  if (average < 60) grade = 'F';
  else if (average >= 60 && average < 70) grade = 'D';
  else if (average >= 70 && average < 80) grade = 'C';
  else if (average >= 80 && average < 90) grade = 'B';
  else if (average >= 90 && average <= 100) grade = 'A';

  return grade
};

console.log(getGrade(70,70,100))