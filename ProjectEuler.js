//Multiple of 3 and 5

const SumAllMultiple = n => {
  // Create an array of number up to the parameter
  let array = Array.from({ length: n }, (v, k) => k);
  // Use Reduce function to sum all numbers that are multiple of 3 or 5
  return array.reduce((sum, num) => {
    if (num % 3 == 0 || num % 5 == 0) {
      return (sum = sum + num);
    }
    return sum;
  }, 0);
};

// Even Fibonacci numbers

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
