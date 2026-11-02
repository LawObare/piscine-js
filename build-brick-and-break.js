export function build(totalBricks) {
  var count = 1;
  var timer = setInterval(function() {
    if (count > totalBricks) {
      clearInterval(timer);
      return;
    }

    var brick = document.createElement('div');
    brick.id = 'brick-' + count;

    if (count % 3 === 2) {
      brick.dataset.foundation = 'true';
    }

    document.body.appendChild(brick);
    count++;
  }, 100);
}

export function repair() {
  var i;
  for (i = 0; i < arguments.length; i++) {
    var id = arguments[i];
    var brick = document.getElementById(id);
    if (brick) {
      if (brick.dataset.foundation === 'true') {
        brick.dataset.repaired = 'in progress';
      } else {
        brick.dataset.repaired = 'true';
      }
    }
  }
}

export function destroy() {
  var bricks = document.getElementsByTagName('div');
  if (bricks.length > 0) {
    var lastBrick = bricks[bricks.length - 1];
    if (lastBrick && lastBrick.id && lastBrick.id.indexOf('brick-') === 0) {
      lastBrick.remove();
    }
  }
}
