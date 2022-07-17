const maxArea = (height) => {
  let heighestArea = 0;
  let leftTracker = 0;
  let rightTracker = height.length - 1;

  for (let i = 0; leftTracker < rightTracker; i++) {
    let currentArea = 0;

    if (height[leftTracker] > height[rightTracker]) {
      currentArea = height[rightTracker] * (rightTracker - leftTracker);
      rightTracker = rightTracker - 1;
      if (currentArea > heighestArea) heighestArea = currentArea;
    } else {
      currentArea = height[leftTracker] * (rightTracker - leftTracker);
      leftTracker = leftTracker + 1;
      if (currentArea > heighestArea) heighestArea = currentArea;
    }
  }

  return heighestArea;
};

console.log(maxArea([1, 1]));

{
  /** solution w less lines and better performance */

  const maxArea = (h) => {
    let ans = 0,
      i = 0,
      j = h.length - 1;

    while (i < j) {
      ans = Math.max(ans, Math.min(h[i], h[j]) * (j - i));
      h[i] <= h[j] ? i++ : j--;
    }
    return ans;
  };
}
