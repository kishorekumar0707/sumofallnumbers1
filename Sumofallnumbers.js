let numbers = [1, 2, 3, 4, 5];

// Anonymous Function
let sum = numbers.reduce(function(acc, curr) {
  return acc + curr;
}, 0);
console.log("Anonymous Function",sum);

// IIFE
let sumIIFE = (function(arr) {
  return arr.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
})(numbers);
console.log("IIFE",sumIIFE);