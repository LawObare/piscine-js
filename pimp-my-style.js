import { styles } from './pimp-my-style.data.js';

let currentStep = 0;
let isUnpimping = false;

export function pimp() {
  const button = document.querySelector('.button');
  if (!button) return;

  if (!isUnpimping) {
    button.classList.add(styles[currentStep]);
    currentStep++;

    if (currentStep === styles.length) {
      isUnpimping = true;
      button.classList.add('unpimp');
    }
  } else {
    currentStep--;
    button.classList.remove(styles[currentStep]);

    if (currentStep === 0) {
      isUnpimping = false;
      button.classList.remove('unpimp');
    }
  }
}
