function firstDayWeek(week, yearStr) {
  const year = parseInt(yearStr, 10);

  const jan1 = new Date(0, 0, 1);
  jan1.setFullYear(year);

  const jan1Day = jan1.getDay();

  let daysToFirstMonday = 1 - jan1Day;
  if (daysToFirstMonday > 0) {
    daysToFirstMonday -= 7;
  }

  const targetMonday = new Date(0, 0, 1);
  targetMonday.setFullYear(year);
  targetMonday.setDate(1 + daysToFirstMonday + (week - 1) * 7);

  if (targetMonday.getFullYear() < year) {
    const formattedYear = String(year).padStart(4, '0');
    return `01-01-${formattedYear}`;
  }

  const dd = String(targetMonday.getDate()).padStart(2, '0');
  const mm = String(targetMonday.getMonth() + 1).padStart(2, '0');
  const yyyy = String(targetMonday.getFullYear()).padStart(4, '0');

  return `${dd}-${mm}-${yyyy}`;
}
