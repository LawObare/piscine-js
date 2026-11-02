let currentCircle = null;
let trapBox = null;

export function createCircle() {
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('box') || event.target.classList.contains('circle')) {
      return;
    }

    var circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.background = 'white';
    circle.style.position = 'absolute';
    circle.style.left = (event.clientX - 25) + 'px';
    circle.style.top = (event.clientY - 25) + 'px';

    document.body.appendChild(circle);
    currentCircle = circle;

    checkTrapped(event.clientX, event.clientY);
  });
}

export function moveCircle() {
  document.addEventListener('mousemove', function(event) {
    if (!currentCircle) return;

    var x = event.clientX;
    var y = event.clientY;

    if (currentCircle.dataset.trapped === 'true') {
      if (trapBox) {
        var boxRect = trapBox.getBoundingClientRect();
        var leftLimit = boxRect.left + 26;
        var rightLimit = boxRect.right - 26;
        var topLimit = boxRect.top + 26;
        var bottomLimit = boxRect.bottom - 26;

        if (x < leftLimit) x = leftLimit;
        if (x > rightLimit) x = rightLimit;
        if (y < topLimit) y = topLimit;
        if (y > bottomLimit) y = bottomLimit;
      }
    }

    currentCircle.style.left = (x - 25) + 'px';
    currentCircle.style.top = (y - 25) + 'px';

    if (currentCircle.dataset.trapped !== 'true') {
      checkTrapped(x, y);
    }
  });
}

export function setBox() {
  var box = document.createElement('div');
  box.className = 'box';
  document.body.appendChild(box);
  trapBox = box;
}

function checkTrapped(x, y) {
  if (!currentCircle || !trapBox) return;

  var boxRect = trapBox.getBoundingClientRect();

  var circleLeft = x - 25;
  var circleRight = x + 25;
  var circleTop = y - 25;
  var circleBottom = y + 25;

  if (
    circleLeft > boxRect.left &&
    circleRight < boxRect.right &&
    circleTop > boxRect.top &&
    circleBottom < boxRect.bottom
  ) {
    currentCircle.style.background = 'var(--purple)';
    currentCircle.dataset.trapped = 'true';
  }
}
