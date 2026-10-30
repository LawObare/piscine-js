function sunnySunday(date) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const target = new Date(date.getTime());

  const utcTarget = Date.UTC(target.getFullYear(), target.getMonth(), target.getDate());
  const utcEpoch = Date.UTC(1, 0, 1);

  const msPerDay = 24 * 60 * 60 * 1000;
  const totalDays = Math.round((utcTarget - utcEpoch) / msPerDay);

  const skippedSundays = Math.floor((totalDays + 0) / 7);
  const runningDays = totalDays - skippedSundays;

  const index = ((runningDays % 6) + 6) % 6;

  return days[index];
}
