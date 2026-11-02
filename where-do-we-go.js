import { places } from './where-do-we-go.data.js';

const NUM = '(\\d+(?:\\.\\d+)?)';

const suffixed = (letters) =>
  new RegExp(
    `${NUM}\\s*°?\\s*(?:${NUM}\\s*['′’]?\\s*)?(?:${NUM}\\s*(?:["″”]|''|′′)?\\s*)?([${letters}])(?![a-z])`,
  );

const prefixed = (letters) => new RegExp(`(?<![A-Za-z])([${letters}])\\s*(-?${NUM})`);

const parseAxis = (text, letters) => {
  let m = text.match(suffixed(letters));
  if (m) {
    const value = +m[1] + (+m[2] || 0) / 60 + (+m[3] || 0) / 3600;
    return /[SW]/.test(m[4]) ? -value : value;
  }
  m = text.match(prefixed(letters));
  if (m) {
    const value = Math.abs(parseFloat(m[2]));
    return /[SW]/.test(m[1]) ? -value : value;
  }
  return null;
};

const isNumeric = (v) =>
  typeof v === 'number' || (typeof v === 'string' && v.trim() !== '' && !isNaN(v));

const parseCoordinates = (c) => {
  if (Array.isArray(c) && c.length >= 2 && c.slice(0, 2).every(isNumeric)) {
    return [Number(c[0]), Number(c[1])];
  }
  if (c && typeof c === 'object' && !Array.isArray(c)) {
    const lat = c.lat ?? c.latitude;
    const lng = c.lng ?? c.lon ?? c.long ?? c.longitude;
    if (isNumeric(lat) && isNumeric(lng)) return [Number(lat), Number(lng)];
  }

  const text = Array.isArray(c) ? c.join(', ') : String(c);
  const lat = parseAxis(text, 'NS');
  const lng = parseAxis(text, 'EW');
  if (lat !== null && lng !== null) return [lat, lng];

  const nums = text.match(/-?\d+(?:\.\d+)?/g) || [];
  return [parseFloat(nums[0]), parseFloat(nums[1])];
};

const formatCoordinates = (c) => {
  if (Array.isArray(c)) return c.join(', ');
  if (c && typeof c === 'object') {
    return `${c.lat ?? c.latitude}, ${c.lng ?? c.lon ?? c.long ?? c.longitude}`;
  }
  return String(c);
};

const imageName = (name) =>
  name.split(',')[0].toLowerCase().trim().split(/\s+/).join('-');

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

    const { name, coordinates, color } = sorted[index];
    const coords = formatCoordinates(coordinates);
    location.textContent = `${name}\n${coords}`;
    location.style.color = color;
    location.href = `https://www.google.com/maps?q=${encodeURIComponent(coords)}`;
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
