function sunnySunday(date) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const epoch = new Date(0, 0, 1);
  epoch.setFullYear(1);

  const msPerDay = 24 * 60 * 60 * 1000;

  const diffTime = date.getTime() - epoch.getTime();
  const totalDays = Math.round(diffTime / msPerDay);

  let skippedSundays;
  if (totalDays >= 0) {
    skippedSundays = Math.floor(totalDays / 7);
  } else {
    skippedSundays = Math.ceil(totalDays / 7);
  }

  const runningDays = totalDays - skippedSundays;

  const index = ((runningDays % 6) + 6) % 6;

  return days[index];
}
