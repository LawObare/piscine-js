import { places } from './where-do-we-go.data.js';

const parseCoordinates = (coordinates) => {
  if (Array.isArray(coordinates)) {
    return [Number(coordinates[0]), Number(coordinates[1])];
  }
  const parts = String(coordinates).split(',').map((p) => p.trim());
  return parts.map((part) => {
    const value = parseFloat(part);
    return /[SW]/i.test(part) ? -Math.abs(value) : value;
  });
};

const formatCoordinates = (coordinates) =>
  Array.isArray(coordinates) ? coordinates.join(', ') : String(coordinates);

const imageName = (name) => name.toLowerCase().trim().split(/\s+/).join('-');

export function explore() {
  const sorted = [...places]
    .map((place) => ({ ...place, parsed: parseCoordinates(place.coordinates) }))
    .sort((a, b) => b.parsed[0] - a.parsed[0]);

  sorted.forEach(({ name }) => {
    const section = document.createElement('section');
    section.style.background = `url("./where-do-we-go_images/${imageName(name)}.jpg")`;
    section.style.height = '100vh';
    document.body.appendChild(section);
  });

  const location = document.createElement('a');
  location.className = 'location';
  location.target = '_blank';
  document.body.appendChild(location);

  const direction = document.createElement('div');
  direction.className = 'direction';
  direction.textContent = 'N';
  document.body.appendChild(direction);

  let current = -1;

  const updateLocation = () => {

    const middle = window.scrollY + window.innerHeight / 2;
    let index = Math.floor(middle / window.innerHeight);
    index = Math.max(0, Math.min(sorted.length - 1, index));
    if (index === current) return;
    current = index;

    const { name, coordinates, color, parsed } = sorted[index];
    location.textContent = `${name}\n${formatCoordinates(coordinates)}`;
    location.style.color = color;
    location.href = `https://www.google.com/maps?q=${parsed[0]},${parsed[1]}`;
  };

  let lastScroll = window.scrollY;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > lastScroll) direction.textContent = 'S';
    else if (y < lastScroll) direction.textContent = 'N';
    lastScroll = y;
    updateLocation();
  });

  updateLocation();
}
