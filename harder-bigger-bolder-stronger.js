export function generateLetters() {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var totalLetters = 120;
  var minSize = 11;
  var maxSize = 130;
  var i;

  for (i = 0; i < totalLetters; i++) {
    var letterDiv = document.createElement('div');

    var randomIndex = Math.floor(Math.random() * alphabet.length);
    letterDiv.textContent = alphabet.charAt(randomIndex);

    var size = minSize + ((maxSize - minSize) / (totalLetters - 1)) * i;
    letterDiv.style.fontSize = Math.round(size) + 'px';

    if (i < 40) {
      letterDiv.style.fontWeight = '300';
    } else if (i < 80) {
      letterDiv.style.fontWeight = '400';
    } else {
      letterDiv.style.fontWeight = '600';
    }

    document.body.appendChild(letterDiv);
  }
}
