// Import styles to let vite process them
// import './css/compiled.css';
import { countPrimeNumbers } from './lib/primes';

// Starting point. Enjoy the ride.

const maxValueFld = document.getElementById('maxValue');
const txtResult = document.getElementById('result');
const testsContainer = document.querySelector('main');

let maxValue = 10000;
maxValueFld.value = maxValue;
maxValueFld.addEventListener('input', () => {
  maxValue = parseInt(maxValueFld.value);
});

testsContainer.addEventListener('click', (ev) => {

  if (ev.target.matches('#blocking')) {
    const startBtn = ev.target;
    txtResult.textContent = '?';
    startBtn.disabled = true;

    const start = performance.now();
    const result = countPrimeNumbers(1, maxValue);
    const end = performance.now();

    const elapsedMilliseconds = end - start;
    startBtn.previousElementSibling.querySelector('span').textContent = elapsedMilliseconds.toFixed(0);
    startBtn.disabled = false;
    txtResult.textContent = result;
  }
});

