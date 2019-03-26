//Largest prime factor
// Find largest prime factor of a number

const largestPrimeFactor = num => {
  // Make an array of all numbers from sqrt of the argument to 2 to find the Prime factors of the argument
  // Factors of a number cannot be greated that its sqrt
  let arr = Array.from(
    { length: num < 25 ? num : parseInt(Math.sqrt(num)) + 1 },
    (v, k) => k
  )
    .slice(2)
    .reverse();

  // Look for Prime numbers that could be factors of the argument
  let onlyPrimes = arr.filter(n => {
    let m = n > 2 ? n - 1 : 2;
    while (m > 1 && m >= Math.sqrt(n)) {
      if (n % m === 0 || num % n !== 0) return false;
      m--;
    }
    return true;
  });
  // Return the first element in the onlyPrimes array (largest)
  return onlyPrimes[0];
};
