function interpolation({ step, start, end, callback, duration }) {
  const interval = duration / step;

  for (let i = 0; i < step; i++) {
    const value = start + (end - start) * (i / step);
    const time = duration * ((i + 1) / step);

    setTimeout(() => {
      callback([value, time]);
    }, interval * (i + 1));
  }
}
