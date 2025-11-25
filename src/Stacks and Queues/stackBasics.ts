//! Reverse a string using Stack
function reverse(str: string) {
  let stack = [];
  let revStr = "";
  if (str.length === 0 || str == null) {
    return;
  }
  for (let char of str) {
    stack.push(char);
  }
  while (stack.length > 0) {
    revStr += stack.pop();
  }
  return revStr;
}
// console.log(reverse("Hello"));

//! check for Valid Parentheses

function isValidParentheses(str: string): boolean {
  let stack: string[] = [];
  const pairs: Record<string, string> = { ")": "(", "]": "[", "}": "{" };
  if (!str || str.length === 0) {
    return false;
  }
  for (let char of str) {
    if ("({[".includes(char)) {
      stack.push(char);
    } else if (!str.length || stack.pop() !== pairs[char]) {
      return false;
    }
  }
  return stack.length === 0;
}
// console.log(isValidParentheses(""));
// console.log(isValidParentheses("({[]})"));
// console.log(isValidParentheses("(){}[]"));
// console.log(isValidParentheses("(]"));

//! Remove Adjacent Duplicates

function adjDuplicates(str: string) {
  let stack: string[] = [];
  if (!str || str.length === 0) {
    return "";
  }
  for (let char of str) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}
console.log(adjDuplicates("abcc"));

//! Next Greater Element to its right

function nextGreater(arr: number[]) {
  let stack: number[] = [];
  let res: number[] = new Array(arr.length).fill(-1);
  if (!arr || arr.length <= 1) return -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    // when i = 4 , stack = [3] , res = [-1,-1,-1,-1,-1]
    // when i = 3 , stack = [4] *( 3 will be removed from stack inside while loop bcoz arr[3]= 4 which is more than stack[] = 3), res = [-1,-1,-1,-1,-1]
    // when i = 2 , stack = [4,2] , res = [-1,-1,4,-1,-1]
    // when i = 1 , stack = [4,2,1], res = [-1,2,4,-1,-1]
    // when i = 0 , stack = [4,2] res = [4,2,4,-1,-1]
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      res[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
    console.log("i : ", i, stack, res);
  }
  return res;
}

console.log(nextGreater([2, 1, 2, 4, 3]));
