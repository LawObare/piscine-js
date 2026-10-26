const vowels = /[aeiou]/ig;

function vowelDots(str) {
  return str.replace(vowels, "$&.");
};
