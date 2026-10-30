function addWeek(date) {
  const days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
  ];

  const epoch = new Date(Date.UTC(1, 0, 1));

  const dateTime = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());

  const msPerDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor((dateTime - epoch) / msPerDay);

  const index = ((diffDays % 14) + 14) % 14;

  return days[index];
}

function timeTravel({ date, hour, minute, second }) {
  const newDate = new Date(date.getTime());

  newDate.setHours(hour, minute, second);

  return newDate;
}
