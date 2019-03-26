//Given an array of 2 numbers
//find the least common multiple of all numbers
//within the range of that 2 numbers

const leastCommonMultiple = arr => {
  // Get the Max and Min from the argument, arr
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);

  // initial the least common multiple to the lcm of the first 2 number in the range
  let leaseCommon = lcm(min, min + 1);

  // Run through range of numbers and get the lcm of the previous lcm and the next number in range
  while (min < max) {
    min++;
    leaseCommon = lcm(leaseCommon, min);
  }

  return leaseCommon;
};

// Function for Greatest Common Divisor (gcd)
// Euclidean Algorithm
const gcd = (x, y) => {
  while (y > 0) {
    let temp = x;
    x = y;
    y = temp % y;
  }
  return x;
};

// Function for Least Common Mutiple (lcm)
// multiple of 2 numbers equals to multiple of their gcd and lcm
const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};
