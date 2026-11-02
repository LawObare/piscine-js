let currentCircle = null;
let trapBox = null;

export function createCircle(e) {
  function handler(event) {
    if (event.target.classList.contains('box')) {
      return;
    }
    var circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.background = 'white';
    circle.style.position = 'absolute';
    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';
    
    document.body.appendChild(circle);
    currentCircle = circle;
  }

  if (e && e.clientX !== undefined) {
    handler(e);
  } else {
    document.addEventListener('click', handler);
  }
}

export function moveCircle(e) {
  function handler(event) {
    if (!currentCircle) return;
    
    var x = event.clientX;
    var y = event.clientY;
    
    if (currentCircle.getAttribute('data-trapped') === 'true' || currentCircle.style.background === 'var(--purple)') {
      if (trapBox) {
        var boxRect = trapBox.getBoundingClientRect();
        var circleRect = currentCircle.getBoundingClientRect();
        var radius = circleRect.width / 2;
        
        var leftLimit = boxRect.left + 1;
        var rightLimit = boxRect.right - 1 - (circleRect.width || 50);
        var topLimit = boxRect.top + 1;
        var bottomLimit = boxRect.bottom - 1 - (circleRect.height || 50);
        
        if (x < leftLimit) x = leftLimit;
        if (x > rightLimit) x = rightLimit;
        if (y < topLimit) y = topLimit;
        if (y > bottomLimit) y = bottomLimit;
      }
    }
    
    currentCircle.style.left = x + 'px';
    currentCircle.style.top = y + 'px';
    
    if (trapBox && currentCircle.style.background !== 'var(--purple)') {
      var boxRect = trapBox.getBoundingClientRect();
      var cWidth = currentCircle.offsetWidth || 50;
      var cHeight = currentCircle.offsetHeight || 50;
      
      if (
        x > boxRect.left &&
        (x + cWidth) < boxRect.right &&
        y > boxRect.top &&
        (y + cHeight) < boxRect.bottom
      ) {
        currentCircle.style.background = 'var(--purple)';
        currentCircle.setAttribute('data-trapped', 'true');
      }
    }
  }

  if (e && e.clientX !== undefined) {
    handler(e);
  } else {
    document.addEventListener('mousemove', handler);
  }
}

export function setBox() {
  var box = document.createElement('div');
  box.className = 'box';
  document.body.appendChild(box);
  trapBox = box;
}
