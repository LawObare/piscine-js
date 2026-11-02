export function getArchitects() {
  var architects = Array.prototype.slice.call(document.getElementsByTagName('a'));
  var allElements = Array.prototype.slice.call(document.body.getElementsByTagName('*'));
  var nonArchitects = [];
  var i;

  for (i = 0; i < allElements.length; i++) {
    if (allElements[i].tagName.toLowerCase() !== 'a') {
      nonArchitects.push(allElements[i]);
    }
  }

  return [architects, nonArchitects];
}

export function getClassical() {
  var classical = Array.prototype.slice.call(document.querySelectorAll('a.classical'));
  var nonClassical = Array.prototype.slice.call(document.querySelectorAll('a:not(.classical)'));
  return [classical, nonClassical];
}

export function getActive() {
  var activeClassical = Array.prototype.slice.call(document.querySelectorAll('a.classical.active'));
  var nonActiveClassical = Array.prototype.slice.call(document.querySelectorAll('a.classical:not(.active)'));
  return [activeClassical, nonActiveClassical];
}

export function getBonannoPisano() {
  var bonanno = document.getElementById('BonannoPisano');
  var otherActiveClassical = Array.prototype.slice.call(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'));
  return [bonanno, otherActiveClassical];
}
