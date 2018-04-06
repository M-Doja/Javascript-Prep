// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// exponential runtime (bad) / recursive
// use if memoization is how to fix runtime

function memoize(fn){
  const cache = {};
  return function(...args){
    if (cache[args]){
      return cache[args];
    }
    const res = fn.apply(this, args);
    cache[args] = res;

    return res;
  };
}

function fib(n) {
  if(n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

// exponential runtime (bad) / recursive
// function fib(n) {
//   if(n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// linear runtime / iterative
// function fib(n) {
//   const arr = [0, 1];
//   for(let i = 2; i <= n; i++){
//     const a = arr[i-1];
//     const b = arr[i-2];
//
//     arr.push(a+b);
//   }
//   return arr[n];
// }

module.exports = fib;
