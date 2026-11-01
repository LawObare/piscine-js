function filterShortStateName(arr) {
  return arr.filter(function(state) {
    return state.length < 7;
  });
}

function filterStartVowel(arr) {
  return arr.filter(function(state) {
    var firstChar = state.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].indexOf(firstChar) !== -1;
  });
}

function filter5Vowels(arr) {
  return arr.filter(function(state) {
    var vowelMatches = state.match(/[aeiou]/gi);
    return vowelMatches !== null && vowelMatches.length >= 5;
  });
}

function filter1DistinctVowel(arr) {
  return arr.filter(function(state) {
    var vowelMatches = state.toLowerCase().match(/[aeiou]/g);
    if (!vowelMatches) {
      return false;
    }
    var uniqueVowels = vowelMatches.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
    return uniqueVowels.length === 1;
  });
}

function multiFilter(arr) {
  return arr.filter(function(item) {
    var hasValidCapital = item.capital && item.capital.length >= 8;

    var firstCharName = item.name ? item.name.charAt(0).toLowerCase() : '';
    var nameStartsVowel = ['a', 'e', 'i', 'o', 'u'].indexOf(firstCharName) !== -1;
    var hasValidName = !nameStartsVowel;

    var tagVowelMatches = item.tag ? item.tag.match(/[aeiou]/gi) : null;
    var hasValidTag = tagVowelMatches !== null;

    var hasValidRegion = item.region !== "South";

    return hasValidCapital && hasValidName && hasValidTag && hasValidRegion;
  });
}
