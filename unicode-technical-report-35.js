function format(date, pattern) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const weekdays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ];

  const pad = (n, len) => String(n).padStart(len, '0');

  // Local-time getters: new Date("7 January 1985, 3:08:19") and
  // new Date(-585, 4, 28) are both parsed/built in local time.
  const year = date.getFullYear();
  const isBC = year < 1;
  const absYear = Math.abs(year);
  const hours = date.getHours();

  const handlers = {
    y: (len) => (len === 2 ? pad(absYear % 100, 2) : pad(absYear, len)),
    G: (len) => (len >= 4 ? (isBC ? 'Before Christ' : 'Anno Domini') : (isBC ? 'BC' : 'AD')),
    M: (len) => {
      const m = date.getMonth();
      if (len <= 2) return pad(m + 1, len);
      if (len === 3) return months[m].slice(0, 3);
      return months[m];
    },
    d: (len) => pad(date.getDate(), len),
    E: (len) => {
      const name = weekdays[date.getDay()];
      return len >= 4 ? name : name.slice(0, 3);
    },
    h: (len) => pad(hours % 12 || 12, len),
    H: (len) => pad(hours, len),
    m: (len) => pad(date.getMinutes(), len),
    s: (len) => pad(date.getSeconds(), len),
    a: () => (hours < 12 ? 'AM' : 'PM'),
  };

  return pattern.replace(/y+|G+|M+|d+|E+|h+|H+|m+|s+|a+/g, (token) =>
    handlers[token[0]](token.length)
  );
}
