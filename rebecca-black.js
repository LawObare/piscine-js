export function isFriday(date) {
  return date.getDay() === 5;
}

export function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

export function isLeapYear(date) {
  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

export function isLastDayOfMonth(date) {
  const testDate = new Date(date.getTime());

  testDate.setDate(testDate.getDate() + 1);

  return testDate.getDate() === 1;
}
