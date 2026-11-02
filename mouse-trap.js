const trapped = new WeakSet();
const BORDER = 1;

const getBox = () => document.querySelector('.box');

const getLastCircle = () => {
  const circles = document.querySelectorAll('.circle');
  return circles[circles.length - 1];
};

// Center the circle on the given coordinates
const placeCircle = (circle, x, y) => {
  const { width, height } = circle.getBoundingClientRect();
  circle.style.left = x - width / 2 + 'px';
  circle.style.top = y - height / 2 + 'px';
};

// Circle is inside when it does not touch/overlap the box's 1px borders
const isInsideBox = (circle, box) => {
  if (!box) return false;
  const c = circle.getBoundingClientRect();
  const b = box.getBoundingClientRect();
  return (
    c.left >= b.left + BORDER &&
    c.right <= b.right - BORDER &&
    c.top >= b.top + BORDER &&
    c.bottom <= b.bottom - BORDER
  );
};

const trapIfInside = (circle) => {
  if (isInsideBox(circle, getBox())) {
    circle.style.background = 'var(--purple)';
    trapped.add(circle);
  }
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export function createCircle() {
  document.addEventListener('click', (e) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.background = 'white';
    document.body.appendChild(circle);
    placeCircle(circle, e.clientX, e.clientY);
    trapIfInside(circle);
  });
}

export function moveCircle() {
  document.addEventListener('mousemove', (e) => {
    const circle = getLastCircle();
    if (!circle) return;

    let x = e.clientX;
    let y = e.clientY;

    if (trapped.has(circle)) {
      // Trapped: keep following the mouse, but never leave the box
      const box = getBox();
      if (box) {
        const b = box.getBoundingClientRect();
        const { width, height } = circle.getBoundingClientRect();
        x = clamp(x, b.left + BORDER + width / 2, b.right - BORDER - width / 2);
        y = clamp(y, b.top + BORDER + height / 2, b.bottom - BORDER - height / 2);
      }
      placeCircle(circle, x, y);
      return;
    }

    placeCircle(circle, x, y);
    trapIfInside(circle);
  });
}

export function setBox() {
  const box = document.createElement('div');
  box.className = 'box';
  document.body.appendChild(box);
}
