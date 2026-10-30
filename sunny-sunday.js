function sunnySunday(date) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const start = Date.parse('0001-01-01T00:00:00Z');
  const msPerDay = 24 * 60 * 60 * 1000;

  const diff = Math.floor((date.getTime() - start) / msPerDay);

  return days[((diff % 6) + 6) % 6];
}
