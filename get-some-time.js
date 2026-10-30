function firstDayWeek(week, yearStr) {
  const year = parseInt(yearStr, 10);

  const jan1 = new Date(year, 0, 1);
  const jan1Day = jan1.getDay();

  let daysToFirstMonday = 1 - jan1Day;
  if (daysToFirstMonday > 0) {
    daysToFirstMonday -= 7;
  }

  const targetMonday = new Date(year, 0, 1 + daysToFirstMonday + (week - 1) * 7);

  if (targetMonday.getFullYear() < year) {
    return `01-01-${year}`;
  }

  const dd = String(targetMonday.getDate()).padStart(2, '0');
  const mm = String(targetMonday.getMonth() + 1).padStart(2, '0');
  const yyyy = targetMonday.getFullYear();

  return `${dd}-${mm}-${yyyy}`;
}
