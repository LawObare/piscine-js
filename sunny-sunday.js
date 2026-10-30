function sunnySunday(date) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const epoch = new Date(0, 0, 1);
  epoch.setFullYear(1);

  const msPerDay = 24 * 60 * 60 * 1000;
  const totalDays = Math.round((date.getTime() - epoch.getTime()) / msPerDay);

  const skippedSundays = Math.floor(totalDays / 7);
  const runningDays = totalDays - skippedSundays;

  const index = ((runningDays % 6) + 6) % 6;

  return days[index];
}
