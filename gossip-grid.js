import { gossips } from './gossip-grid.data.js';

export function grid() {
  // Current slider-driven styles (applied to every card, including new ones)
  const styles = {};

  const applyStyles = (card) => {
    if (styles.width !== undefined) card.style.width = styles.width;
    if (styles.fontSize !== undefined) card.style.fontSize = styles.fontSize;
    if (styles.background !== undefined) card.style.backgroundColor = styles.background;
  };

  const applyToAll = () => {
    document.querySelectorAll('.gossip').forEach(applyStyles);
  };

  // ---- Range controls ----
  const ranges = document.createElement('div');
  ranges.className = 'ranges';

  const makeRange = (id, min, max, format) => {
    const input = document.createElement('input');
    input.type = 'range';
    input.id = id;
    input.className = 'range';
    input.min = min;
    input.max = max;
    input.addEventListener('input', () => {
      styles[id] = format(input.value);
      applyToAll();
    });
    return input;
  };

  ranges.append(
    makeRange('width', 200, 800, (v) => `${v}px`),
    makeRange('fontSize', 20, 40, (v) => `${v}px`),
    makeRange('background', 20, 75, (v) => `hsl(280, 50%, ${v}%)`),
  );

  // ---- Gossip grid ----
  const gridEl = document.createElement('div');
  gridEl.className = 'gossip-grid';

  const createGossip = (text) => {
    const card = document.createElement('div');
    card.className = 'gossip';
    card.textContent = text;
    applyStyles(card);
    return card;
  };

  const form = document.createElement('form');
  form.className = 'gossip';

  const textarea = document.createElement('textarea');
  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Share gossip!';
  form.append(textarea, button);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = textarea.value.trim();
    if (!text) return;
    // New gossip goes right after the form
    form.after(createGossip(text));
    textarea.value = '';
  });

  applyStyles(form);
  gridEl.append(form, ...gossips.map(createGossip));

  document.body.append(ranges, gridEl);
}
