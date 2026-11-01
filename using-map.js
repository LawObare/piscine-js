function citiesOnly(arr) {
  return arr.map(function(item) {
    return item.city;
  });
}

function upperCasingStates(arr) {
  return arr.map(function(state) {
    return state
      .split(" ")
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  });
}

function fahrenheitToCelsius(arr) {
  return arr.map(function(tempStr) {
    var fahrenheit = parseInt(tempStr, 10);
    var celsius = Math.floor((fahrenheit - 32) * 5 / 9);
    return celsius + "°C";
  });
}

function trimTemp(arr) {
  return arr.map(function(item) {
    return Object.assign({}, item, {
      temperature: item.temperature.replace(/\s+/g, "")
    });
  });
}

function tempForecasts(arr) {
  return arr.map(function(item) {
    var fahrenheit = parseInt(item.temperature, 10);
    var celsius = Math.floor((fahrenheit - 32) * 5 / 9);

    var formattedState = item.state
      .split(" ")
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");

    return celsius + "°Celsius in " + item.city + ", " + formattedState;
  });
}
