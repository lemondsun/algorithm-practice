// Write function bmi that calculates body mass index and return assesment
// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
// for example bmi(80, 1.80) will return normal


// the function will need the weight and height to find BMI so include them as paramiters
// Assign height squared to a variable called heightIndex
// Assign weight weight divided heightIndex to bmiIndex
// create an empty variable (finalResponse) to contain response to bmiIndex
// create a switch operator to assign a string to finalResponse based on bmiIndex
// return finalResponse

let bmi = (weight, height) => {
  let heightIndex = height ** 2;
  
  let bmiIndex = weight / heightIndex;
  
  let finalResponse;
// Because the switch operator can only tell if something matches and not what the value of a case is...
  // I'm checking if the bmiIndex is true and not how much the bmiIndex is
  switch (true) {
    case bmiIndex <= 18.5:
    finalResponse = "Underweight";
      break;
    case bmiIndex <= 25.0:
    finalResponse = "Normal";
      break;
    case bmiIndex <= 30.0:
    finalResponse = "Overweight";
      break;
    case bmiIndex > 30:
    finalResponse = "Obese";
  }
  return finalResponse
}

let yourAssesment = bmi(80, 1.80)

console.log(yourAssesment)