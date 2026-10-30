export function isValid(date) {
  if (!(date instanceof Date) && typeof date !== 'number') {
    return false;
  }

  if (date instanceof Date) {
    return !isNaN(date.getTime());
  }

  return !isNaN(date);
}

export function isAfter(date1, date2) {
  if (!isValid(date1) || !isValid(date2)) {
    return false;
  }

  const t1 = date1 instanceof Date ? date1.getTime() : date1;
  const t2 = date2 instanceof Date ? date2.getTime() : date2;

  return t1 > t2;
}

export function isBefore(date1, date2) {
  if (!isValid(date1) || !isValid(date2)) {
    return false;
  }

  const t1 = date1 instanceof Date ? date1.getTime() : date1;
  const t2 = date2 instanceof Date ? date2.getTime() : date2;

  return t1 < t2;
}

export function isFuture(date) {
  if (!isValid(date)) {
    return false;
  }

  const t = date instanceof Date ? date.getTime() : date;
  return t > Date.now();
}

export function isPast(date) {
  if (!isValid(date)) {
    return false;
  }

  const t = date instanceof Date ? date.getTime() : date;
  return t < Date.now();
}
