// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// Challenge 1
function countdown(n) {
  if (n < 1) return;
  console.log(n);
  return countdown(n - 1);
}

// To check if you've completed it, uncomment these console.logs!
// countdown(5);
// countdown(10);

// Challenge 2
function sum(array, acc = 0) {
  if (array.length === 0) return acc;
  acc += array[0];
  return sum(array.slice(1), acc);
}

// uncomment these to check your work
// console.log(sum([1,1,1])); // -> returns 3
// console.log(sum([1,2,3,4,5,6])); // -> returns 21

// Challenge 3
function palindrome(string) {
  // build an output string
  let str = string
    .replace(/[^a-zA-z]/g, '')
    .split('')
    .map((ch) => ch.toLowerCase())
    .join('');

  if (str.length === 1 || str === '') return true;

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return palindrome(str.slice(1, -1));
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false

// Challenge 4

function isPrime(num, divider = 2) {
  if (!Number.isInteger(num) || num === 1) return false;
  if (divider === num) return true;
  if (num % divider === 0) return false;

  return isPrime(num, ++divider);
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false

//Challenge 5
function pathFinder(obj, arr) {
  if (arr.length === 1) return obj[arr[0]];

  return pathFinder(obj[arr[0]], arr.slice(1));
}

const obj = {
  first: { second: { third: 'finish' } },
  second: { third: 'wrong' },
};
const arr = ['first', 'second', 'third'];
// console.log(pathFinder(obj, arr));   //-> "finish"

// Challenge 6
// function flattenRecursively(arr, acc = []) {
//   return arr.reduce((acc, curr) => {
//     if (!Array.isArray(curr)) return [...acc, curr];
//     return [...acc, ...flattenRecursively(curr)];
//   }, []);
// }
function flattenRecursively(arr, acc = []) {
  let newAcc = [...acc];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newAcc.push(arr[i]);
    } else {
      newAcc = flattenRecursively(arr[i], [...newAcc]);
    }
  }
  return newAcc;
}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
// console.log(flattenRecursively([1, [3, [4, 5, [6]]], {}, [3, [[4]]]])); //-> [1, 3, 4, 5, 6, {}, 3, 4]

//Challenge 7
// function findInOrderedSet(arr, target) {
// 	if (arr.length === 0) return false;

//   if (arr[0] === target) return true;

//   return findInOrderedSet(arr.slice(1), target);
// }

// with binary search
function findInOrderedSet(arr, target) {
  if (arr.length === 1 && arr[0] !== target) return false;

  const middle = Math.floor(arr.length / 2);
  if (arr[middle] === target) return true;

  if (target < arr[middle])
    return findInOrderedSet(arr.slice(0, middle), target);
  return findInOrderedSet(arr.slice(middle), target);
}

const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4)); //-> true
// console.log(findInOrderedSet(nums, 2)); //-> false

//Challenge 8
// VERSION 1
// function countWaysToReachNthStair(n) {

//   function fib(n) {

//      if (n <= 1) return n;

//      return fib(n - 1) + fib(n - 2)
//   }
//   return fib(n + 1)
// }
// VERSION 2
function countWaysToReachNthStair(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2);
}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))

//Challenge 9
function getPermutations(arr) {
  if (arr.length === 2)
    return [
      [arr[0], arr[1]],
      [arr[1], arr[0]],
    ];
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let permutations = getPermutations(
      arr.slice(0, i).concat(arr.slice(i + 1))
    );
    for (const permutation of permutations) {
      output.push([arr[i]].concat(permutation));
    }
  }
  return output;
}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

//Challenge 10
function getRangeBetween(x, y) {
  if (x + 1 === y) return acc;
  x++;
  return getRangeBetween(x, y, [...acc, x]);
}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
