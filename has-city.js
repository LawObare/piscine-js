function hasCity(country, citiesArr) {
  return function(city) {
    var hasMatch = false;
    var i;
    if (citiesArr) {
      for (i = 0; i < citiesArr.length; i++) {
        if (citiesArr[i] === city) {
          hasMatch = true;
          break;
        }
      }
    }
    
    if (hasMatch) {
      return city + " is a city from " + country;
    } else {
      return city + " is not a city from " + country;
    }
  };
}
