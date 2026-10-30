function sunnySunday(date) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const epoch = new Date(0, 0, 1);
  epoch.setFullYear(1);

  let count = 0;
  const current = new Date(epoch.getTime());

  if (current <= date) {
    while (current < date) {
      if (current.getDay() !== 0) {
        count++;
      }
      current.setDate(current.getDate() + 1);
    }
    return days[count % 6];
  } else {
    while (current > date) {
      current.setDate(current.getDate() - 1);
      if (current.getDay() !== 0) {
        count--;
      }
    }
    return days[((count % 6) + 6) % 6];
  }
}
