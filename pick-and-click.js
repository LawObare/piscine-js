const SVG_NS = 'http://www.w3.org/2000/svg';

const createDiv = (className) => {
  const el = document.createElement('div');
  el.className = className;
  document.body.appendChild(el);
  return el;
};

const createLine = (svg, id) => {
  const line = document.createElementNS(SVG_NS, 'line');
  line.setAttribute('id', id);
  line.setAttribute('stroke', 'white');
  svg.appendChild(line);
  return line;
};

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    // Fallback for contexts where the Clipboard API is unavailable
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }
};

export function pick() {
  const hslDiv = createDiv('hsl');
  const hueDiv = createDiv('hue text');
  const lumDiv = createDiv('luminosity text');

  const svg = document.createElementNS(SVG_NS, 'svg');
  const axisX = createLine(svg, 'axisX');
  const axisY = createLine(svg, 'axisY');
  document.body.appendChild(svg);

  let current = '';

  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;

    const hue = Math.round((clientX / window.innerWidth) * 360);
    const luminosity = Math.round((clientY / window.innerHeight) * 100);
    current = `hsl(${hue}, 50%, ${luminosity}%)`;

    document.body.style.background = current;
    hslDiv.textContent = current;
    hueDiv.textContent = `Hue: ${hue}`;
    lumDiv.textContent = `Luminosity: ${luminosity}`;

    // Vertical line following X
    axisX.setAttribute('x1', clientX);
    axisX.setAttribute('x2', clientX);
    axisX.setAttribute('y1', 0);
    axisX.setAttribute('y2', window.innerHeight);

    // Horizontal line following Y
    axisY.setAttribute('y1', clientY);
    axisY.setAttribute('y2', clientY);
    axisY.setAttribute('x1', 0);
    axisY.setAttribute('x2', window.innerWidth);
  });

  document.addEventListener('click', () => {
    copyText(current || hslDiv.textContent);
  });
}
