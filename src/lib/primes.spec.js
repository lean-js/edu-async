import { countPrimeNumbers, isPrimeNumber } from './primes';

describe('Primes library', () => {

  describe('isPrimeNumber function', () => {

    it('reports number one to be false', () => {
      expect(isPrimeNumber(1)).toBe(false);
    });

    it('reports number two to be true', () => {
      expect(isPrimeNumber(2)).toBe(true);
    });

    it('reports number three to be true', () => {
      expect(isPrimeNumber(3)).toBe(true);
    });

    it('reports false for all even numbers', () => {
      const n = (Math.floor(Math.random() * 1000) + 1) * 2;
      expect(isPrimeNumber(n)).toBe(false);
    });

    it('reports true for some well known prime numbers', () => {
      // three non-primes: 25, 39 and 77
      const numbers = [5, 7, 11, 13, 19, 23, 25, 29, 39, 71, 77, 173];
      const primesCount = numbers.reduce((count, n) => isPrimeNumber(n) ? count + 1 : count, 0);
      expect(primesCount).toBe(numbers.length - 3);
    });
  });

  describe('countPrimeNumbers function', () => {

    it('gives correct counts for given ranges', () => {
      // See https://en.wikipedia.org/wiki/Prime_number_theorem
      // or https://www.michael-holzapfel.de/themen/primzahlen/pz-anzahl.htm

      expect(countPrimeNumbers(1,10)).toBe(4);
      expect(countPrimeNumbers(1,100)).toBe(25);
      expect(countPrimeNumbers(1,1000)).toBe(168);
      expect(countPrimeNumbers(1,10000)).toBe(1229);
      expect(countPrimeNumbers(1,100000)).toBe(9592);
    });
  });
});
