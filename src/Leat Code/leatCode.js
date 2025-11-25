//? Q1 -- Find longest common prefix in array   ex --> ["flower", "flow", "flight"]  output --> fl
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";
  for (let i = 0; i < strs[0].length; i++) {
    let ch = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== ch) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
};
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); //fl

// ? Q2 -- Remove Duplicates from Sorted Array  ex --> [0,0,1,1,1,2,2,3,3,4] output --> [0,1,2,3,4]
var removeDuplicates = function (nums) {
  if (nums.length === 0 || !nums) {
    return;
  }
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // [0,1,2,3,4]
