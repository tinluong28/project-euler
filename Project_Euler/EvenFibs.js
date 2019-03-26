// Even Fibonacci numbers
// Find sum of all even Fibonacci number up to a given number
const EvenFibs = n => {
  // Initial Fibonacci number array
  let Fibs = [1, 2];
  // Initial the next Fib number;
  let next = 0;
  // Initial the sum of all even Fibs
  let sumAllEvens = 2;
  // User for loop to generate Fibs array
  for (let i = 1; i < n - 1; i++) {
    next = Fibs[i] + Fibs[i - 1];
    Fibs.push(next);
    // If the Fib num is even and less than 4 mils then add to the sum
    if ((next % 2 == 0) & (next < 4000000)) {
      sumAllEvens += next;
    }
  }
  return sumAllEvens;
};
