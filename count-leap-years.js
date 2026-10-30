function countLeapYears(date) {
  const targetYear = date.getFullYear() - 1;

  if (targetYear < 1) {
    return 0;
  }

  return Math.floor(targetYear / 4) - Math.floor(targetYear / 100) + Math.floor(targetYear / 400);
}
