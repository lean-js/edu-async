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
  if( ev.target.matches('button')) {
    const startBtn = ev.target;
    startBtn.disabled = true;
    setTimeout(() => {
      const elapsedMilliseconds = timeThis(() => {
        countPrimeNumbers(1, maxValue);
      });
      startBtn.previousElementSibling.querySelector('span').textContent = elapsedMilliseconds.toFixed(0);
      startBtn.disabled = false;
    }, 50);
  }
});

function timeThis(action) {
  const start = performance.now();
  action();
  const end = performance.now();
  return end - start;
}
