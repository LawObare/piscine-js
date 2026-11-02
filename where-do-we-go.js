import { places } from './where-do-we-go.data.js';

// Turn coordinates into signed decimal [lat, lng].
// Supports an array of numbers or a string like "48.8566° N, 2.3522° E".
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

// Text displayed under the place name
const formatCoordinates = (coordinates) =>
  Array.isArray(coordinates) ? coordinates.join(', ') : String(coordinates);

// "Lisse, The Netherlands" -> "lisse"; "New York, USA" -> "new-york"
const imageName = (name) =>
  name.split(',')[0].toLowerCase().trim().split(/\s+/).join('-');

export function explore() {
  const sorted = [...places]
    .map((place) => ({ ...place, parsed: parseCoordinates(place.coordinates) }))
    .sort((a, b) => b.parsed[0] - a.parsed[0]); // north -> south

  // ---- Sections ----
  sorted.forEach(({ name }) => {
    const section = document.createElement('section');
    section.style.background = `url("./where-do-we-go_images/${imageName(name)}.jpg")`;
    section.style.height = '100vh';
    document.body.appendChild(section);
  });

  // ---- Location indicator ----
  const location = document.createElement('a');
  location.className = 'location';
  location.target = '_blank';
  document.body.appendChild(location);

  // ---- Compass ----
  const direction = document.createElement('div');
  direction.className = 'direction';
  direction.textContent = 'N';
  document.body.appendChild(direction);

  let current = -1;

  const updateLocation = () => {
    // Index of the section currently crossing the vertical center of the viewport
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
