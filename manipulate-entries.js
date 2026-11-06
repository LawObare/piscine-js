function filterEntries(obj, callback) {
  const filtered = Object.entries(obj).filter((entry) => callback(entry));
  return Object.fromEntries(filtered);
}

function mapEntries(obj, callback) {
  const mapped = Object.entries(obj).map((entry) => callback(entry));
  return Object.fromEntries(mapped);
}

function reduceEntries(obj, callback, initialValue) {
  const entries = Object.entries(obj);
  if (initialValue === undefined) {
    return entries.reduce(callback);
  }
  return entries.reduce(callback, initialValue);
}

function totalCalories(cart) {
  const totalRaw = reduceEntries(cart, (acc, [item, grams]) => {
    const itemCal = nutritionDB[item] ? nutritionDB[item].calories : 0;
    return acc + itemCal * grams;
  }, 0);
  return Math.round((totalRaw / 100) * 10) / 10;
}

function lowCarbs(cart) {
  return filterEntries(cart, ([item, grams]) => {
    const per100gCarbs = nutritionDB[item] ? nutritionDB[item].carbs : 0;
    const itemTotalCarbs = (per100gCarbs * grams) / 100;
    return itemTotalCarbs < 50;
  });
}

function cartTotal(cart) {
  const round3 = (x) => Math.round(x * 1000) / 1000;

  return mapEntries(cart, ([item, grams]) => {
    const nutrition = nutritionDB[item] || {};
    const itemTotalFacts = {};

    for (const key in nutrition) {
      if (nutrition.hasOwnProperty(key)) {
        itemTotalFacts[key] = round3((nutrition[key] * grams) / 100);
      }
    }

    return [item, itemTotalFacts];
  });
}
