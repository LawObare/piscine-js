function pyramid(str, nmbr, totalHeight = nmbr) {
  if (nmbr <= 0) {
    return "";
  }

  let currentRow = totalHeight - nmbr + 1;

  let spaces = "";
  let spaceCount = totalHeight - currentRow;
  for (let i = 0; i < spaceCount; i++) {
    spaces = spaces + " ";
  }

  let characters = "";
  let charCount = (2 * currentRow) - 1;
  for (let i = 0; i < charCount; i++) {
    characters = characters + str;
  }

  let currentLine = spaces + characters;

  let nextLines = pyramid(str, nmbr - 1, totalHeight);

  if (nextLines === "") {
    return currentLine;
  } else {
    return currentLine + "\n" + nextLines;
  }
}
