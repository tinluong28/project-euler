//Find sum of all number upto a given number
//that are multiples of 2 given multiples

const SumAllMultiple = (num, multiple1, multiple2) => {
  // Create an array of number up to the parameter
  let array = Array.from({ length: num }, (v, k) => k);
  // Get the least common multiple of the arrOfMultiples
  const smallestCommon = leastCommonMultiple(arrOfMultiples);
  // Use Reduce function to sum all numbers that are multiple of 3 or 5
  return array.reduce((sum, num) => {
    if (num % multiple1 || num % multiple2) {
      return (sum = sum + num);
    }
    return sum;
  }, 0);
};
