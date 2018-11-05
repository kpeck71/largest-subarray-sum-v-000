function largestSubarraySum(nums) {
  let max_so_far =  0
  let max_ending_here = 0
  for (let i=0; i < nums.length; i++) {
    max_ending_here += nums[i]
    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here
    }
    //We keep a variable to store the current sum. If the sum is below zero, then we reset it to the current number (start from current number).
    if (max_ending_here < 0) {
      max_ending_here = 0

    }
  }
  return max_so_far
}

// function largestSubarraySum(arr) {
//   let globalLargest = 0;
//   let localLargest = arr[0];
//   const subArray = arr.slice(1, arr.length - 1);
//    subArray.forEach(n => {
//     localLargest += n;
//     if (localLargest > globalLargest) { globalLargest = localLargest };
//   });
//    return globalLargest
// }
