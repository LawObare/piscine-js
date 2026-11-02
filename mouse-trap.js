const trapped = new WeakSet();

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

// True only if the circle is strictly inside the box (not touching its 1px borders)
const isInsideBox = (circle, box) => {
  if (!box) return false;
  const c = circle.getBoundingClientRect();
  const b = box.getBoundingClientRect();
  return (
    c.left > b.left + 1 &&
    c.right < b.right - 1 &&
    c.top > b.top + 1 &&
    c.bottom < b.bottom - 1
  );
};

const trapIfInside = (circle) => {
  if (isInsideBox(circle, getBox())) {
    circle.style.background = 'var(--purple)';
    trapped.add(circle);
  }
};

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
    if (!circle || trapped.has(circle)) return;
    placeCircle(circle, e.clientX, e.clientY);
    trapIfInside(circle);
  });
}

export function setBox() {
  const box = document.createElement('div');
  box.className = 'box';
  document.body.appendChild(box);
}
