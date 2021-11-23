// Import styles to let vite process them
import '../css/styles.css';
import { countPrimeNumbers } from './lib/primes';

// Starting point. Enjoy the ride.

const maxValueFld = document.getElementById('maxValue');
const testsContainer = document.querySelector('main');

let maxValue = 10000;
maxValueFld.value = maxValue;
maxValueFld.addEventListener('input', () => {
  maxValue = parseInt(maxValueFld.value);
});

testsContainer.addEventListener('click', (ev) => {

  if (ev.target.matches('#blocking')) {
    const startBtn = ev.target;
    startBtn.disabled = true;

    setTimeout(() => {
      const start = performance.now();
      countPrimeNumbers(1, maxValue);
      const end = performance.now();
      const elapsedMilliseconds = end - start;
      startBtn.previousElementSibling.querySelector('span').textContent = elapsedMilliseconds.toFixed(0);
      startBtn.disabled = false;
    }, 50);

  }
});

function startTimer(action) {
  const start = performance.now();
  action();

  return () => {
    const end = performance.now();
    return end - start;
  };

}
