// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + 's';
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(callback(array[i], i));
  }
  return arr;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

// see for yourself if your forEach works!
// console.log(forEach([5, 3, 7], (el) => console.log(el)))

// Challenge 5
function mapWith(array, callback) {
  const arr = [];
  forEach(array, (el) => arr.push(callback(el)));
  return arr;
}

// console.log(mapWith([2, 5, 3], (el) => el * 2));

// Challenge 6
function reduce(array, callback, initialValue) {
  let acc = initialValue !== undefined ? initialValue : array[0];
  let startIdx = initialValue !== undefined ? 0 : 1;

  for (let i = startIdx; i < array.length; i++) {
    acc = callback(acc, array[i], i);
  }

  return acc;
}

// console.log(reduce([[3,4], [5,6]], (acc, curr) => [...acc, ...curr] , []));

// Challenge 7
function intersection(...arrays) {
  return reduce(arrays, (acc, curr) => {
    let newAcc = [];
    for (let i = 0; i < acc.length; i++) {
      if (curr.includes(acc[i])) newAcc.push(acc[i]);
    }
    return newAcc;
  });
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

// Challenge 8
function union(...arrays) {
  return reduce(
    arrays,
    (acc, curr) => {
      forEach(curr, (el) => {
        if (!acc.includes(el)) acc.push(el);
      });

      return acc;
    },
    []
  );
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
// callback(array1[i]) === array2[i];
// obj[array1[i]] = array2[i];

function objOfMatches(array1, array2, callback) {
  return reduce(
    array1,
    (acc, curr, i) => {
      if (callback(curr) == array2[i]) {
        acc[curr] = array2[i];
      }
      return acc;
    },
    {}
  );
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  return reduce(
    arrVals,
    (acc, curr, i) => {
      acc[curr] = map(arrCallbacks, (cb) => cb(curr));
      return acc;
    },
    {}
  );
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  // callback(key) ==== obj[key]
  return reduce(
    Object.keys(obj),
    (acc, curr, i) => {
      if (callback(curr) === obj[curr]) {
        acc[curr] = obj[curr];
      }
      return acc;
    },
    {}
  );
}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  let trueCount = 0;
  forEach(array, (el) => {
    if (callback(el)) trueCount++;
  });
  return trueCount > array.length / 2;
}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
function prioritize(array, callback) {
  const result = reduce(
    array,
    (acc, curr) => {
      if (callback(curr)) {
        return [[...acc[0], curr], acc[1]];
      }
      return [acc[0], [...acc[1], curr]];
    },
    [[], []]
  );
  return result[0].concat(result[1]);
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
// ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

// Challenge 14
function countBy(array, callback) {
  return reduce(
    array,
    (acc, curr) => {
      let key = callback(curr);
      acc[key] = acc[key] + 1 || 1;
      return acc;
    },
    {}
  );
}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  return reduce(
    array,
    (acc, curr) => {
      let key = callback(curr);
      acc[key] = acc[key] ? [...acc[key], curr] : [curr];
      return acc;
    },
    {}
  );
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  return reduce(
    Object.keys(obj),
    (acc, curr) => (callback(obj[curr]) ? [...acc, curr] : acc),
    []
  );
}

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  return func2(func1(value)) === func1(func2(value));
}

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {
  return reduce(
    Object.keys(obj),
    (acc, curr) => {
      if (callback(curr) === obj[curr]) acc[curr] = obj[curr];
      return acc;
    },
    {}
  );
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {
  return (
    (reduce(
      arrOfFuncs,
      (acc, curr) => {
        if (curr(value)) return ++acc;
        return acc;
      },
      0
    ) /
      arrOfFuncs.length) *
    100
  );
}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {
  return reduce(arrOfFuncs, (acc, curr) => {
    return curr(acc)
  }, value);
}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {
  return reduce(Object.keys(objOfFuncs), (acc, curr) => {
    if (!acc.key || acc.value < objOfFuncs[curr](subject)) {
      acc.key = curr;
      acc.value = objOfFuncs[curr](subject);
      return acc;
    }
    return acc;
})
}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  let output = startVal;

  forEach(arrOfFuncs, (func) => {
    output = func(output);
  });

  return output;
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}
function addTen(num) {
  return num + 10;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
function myFunc(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) return i;
  }

  return -1;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

// function isOdd(num) {
//   return (num % 2 !== 0);
// }

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

/*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6
