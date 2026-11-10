const isWinner = async (country) => {
  let winner;

  try {
    winner = await db.getWinner(country);
  } catch (err) {
    return `${country} never was a winner`;
  }

  if (winner.continent !== 'Europe') {
    return `${winner.name} is not what we are looking for because of the continent`;
  }

  let results;

  try {
    results = await db.getResults(winner.id);
  } catch (err) {
    return `${winner.name} never was a winner`;
  }

  if (results.length < 3) {
    return `${winner.name} is not what we are looking for because of the number of times it was champion`;
  }

  const years = results.map((r) => r.year).join(', ');
  const scores = results.map((r) => r.score).join(', ');

  return `${winner.name} won the FIFA World Cup in ${years} winning by ${scores}`;
};
