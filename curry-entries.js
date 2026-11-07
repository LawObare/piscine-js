function defaultCurry(obj1) {
  return function(obj2) {
    return { ...obj1, ...obj2 };
  };
}

function mapCurry(callback) {
  return function(obj) {
    return Object.fromEntries(Object.entries(obj).map(callback));
  };
}

function reduceCurry(callback) {
  return function(obj, initialValue) {
    return Object.entries(obj).reduce(callback, initialValue);
  };
}

function filterCurry(callback) {
  return function(obj) {
    return Object.fromEntries(Object.entries(obj).filter(callback));
  };
}

function reduceScore(personnel, initialValue = 0) {
  return reduceCurry((acc, [_, person]) => {
    if (person.isForceUser) {
      return acc + person.pilotingScore + person.shootingScore;
    }
    return acc;
  })(personnel, initialValue);
}

function filterForce(personnel) {
  return filterCurry(([_, person]) => person.isForceUser && person.shootingScore >= 80)(personnel);
}

function mapAverage(personnel) {
  return mapCurry(([key, person]) => {
    const averageScore = (person.pilotingScore + person.shootingScore) / 2;
    return [key, { ...person, averageScore }];
  })(personnel);
}
