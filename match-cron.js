function matchCron(cronStr, date) {
  const fields = cronStr.split(' ');

  const min = date.getMinutes();
  const hour = date.getHours();
  const dom = date.getDate();
  const month = date.getMonth() + 1;

  let dow = date.getDay();
  if (dow === 0) {
    dow = 7;
  }

  const currentValues = [min, hour, dom, month, dow];

  for (let i = 0; i < 5; i++) {
    const field = fields[i];
    if (field !== '*' && parseInt(field, 10) !== currentValues[i]) {
      return false;
    }
  }

  return true;
}
