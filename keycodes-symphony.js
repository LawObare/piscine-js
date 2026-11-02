export function compose() {
  document.addEventListener('keydown', function(event) {
    var key = event.key;

    if (key === 'Escape') {
      var notes = document.querySelectorAll('.note');
      for (var i = 0; i < notes.length; i++) {
        notes[i].remove();
      }
    } else if (key === 'Backspace') {
      var allNotes = document.querySelectorAll('.note');
      if (allNotes.length > 0) {
        allNotes[allNotes.length - 1].remove();
      }
    } else if (/^[a-z]$/.test(key)) {
      var noteDiv = document.createElement('div');
      noteDiv.className = 'note';
      noteDiv.textContent = key;

      var charCode = key.charCodeAt(0);
      var hue = ((charCode - 97) * (360 / 26)) % 360;
      noteDiv.style.backgroundColor = 'hsl(' + hue + ', 70%, 60%)';

      document.body.appendChild(noteDiv);
    }
  });
}
