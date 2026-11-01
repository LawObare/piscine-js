function longWords(arr) {
  return arr.every(function(item) {
    if (typeof item === 'string') {
      if (item.length >= 5) {
        return true;
      }
    }
    return false;
  });
}

function oneLongWord(arr) {
  return arr.some(function(item) {
    if (typeof item === 'string') {
      if (item.length >= 10) {
        return true;
      }
    }
    return false;
  });
}

function noLongWords(arr) {
  var hasLongWord = arr.some(function(item) {
    if (typeof item === 'string') {
      if (item.length >= 7) {
        return true;
      }
    }
    return false;
  });
  
  if (hasLongWord) {
    return false;
  } else {
    return true;
  }
}
