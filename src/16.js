function sum(nums) {
  if (nums.length <= 1) {
    return nums[0];
  }
  
  const mid = Math.floor(nums.length / 2);
  const leftSum = sum(nums.slice(0, mid));
  const rightSum = sum(nums.slice(mid));
  
  return leftSum + rightSum;
}
