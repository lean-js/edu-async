
function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }

  const maxDivisor = Math.sqrt(n);
  for(let ix = 3; ix <= maxDivisor; ix += 2) {
    if (n % ix === 0) {
      return false;
    }
  }

  return true;
}

function countPrimeNumbers(fromInclusive, toExclusive) {
  let count = 0;
  for (let ix = fromInclusive; ix < toExclusive; ix++) {
    if (isPrimeNumber(ix)) {
      ++count;
    }
  }
  return count;
}

export {
  isPrimeNumber,
  countPrimeNumbers
};
