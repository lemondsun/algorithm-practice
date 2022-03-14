const bouncingBall = (h,  bounce,  window) => {
  //how many times has the ball gone up past the window
  let upPast = 0;
  //how many times has thee ball gone down past the window
  let downPast = 0;

  //reduce h after every impliment of b until h is less than window
  if(bounce>0&& bounce<1){
  for (let i = h; i > window; i *= bounce){
    upPast += 1
    downPast +=1
    }
  };
  //whats the sum of up past and down past
  //return sum of upPast minus one because the ball will always go down once more than up
  //and downPast
  return((upPast-1) + downPast)
}

console.log(bouncingBall(30.0, 1, 1.5))