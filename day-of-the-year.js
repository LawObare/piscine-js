function dayOfTheYear(date) {
  const year = date.getFullYear();

  const jan1 = new Date(date.getTime());
  jan1.setFullYear(year, 0, 1);
  jan1.setHours(0, 0, 0, 0);

  const targetDate = new Date(date.getTime());
  targetDate.setHours(0, 0, 0, 0);

  const msPerDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round((targetDate.getTime() - jan1.getTime()) / msPerDay);

  return diffDays + 1;
}
