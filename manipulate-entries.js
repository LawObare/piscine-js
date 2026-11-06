const nutritionDB = {
  tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
  vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
  oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
  onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
  garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
  paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
  sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
  orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
};

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
