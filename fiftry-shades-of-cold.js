import { colors } from './fifty-shades-of-cold.data.js';

export function generateClasses() {
  const style = document.createElement('style');
  let cssRules = '';

  for (let i = 0; i < colors.length; i++) {
    cssRules += `.${colors[i]} { background: ${colors[i]}; }\n`;
  }

  style.textContent = cssRules;
  document.head.appendChild(style);
}

export function generateColdShades() {
  const coldKeywords = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];

  for (let i = 0; i < colors.length; i++) {
    const colorName = colors[i];
    let isCold = false;

    for (let j = 0; j < coldKeywords.length; j++) {
      if (colorName.indexOf(coldKeywords[j]) !== -1) {
        isCold = true;
        break;
      }
    }

    if (isCold) {
      const div = document.createElement('div');
      div.className = colorName;
      div.textContent = colorName;
      document.body.appendChild(div);
    }
  }
}

export function choseShade(shade) {
  const divs = document.getElementsByTagName('div');

  for (let i = 0; i < divs.length; i++) {
    divs[i].className = shade;
  }
}
