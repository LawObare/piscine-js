function sameAmount(str, reg1, reg2) {
  let Reg1 = new RegExp(reg1, 'g');
  let Reg2 = new RegExp(reg2, 'g');
  let matches1 = str.match(Reg1);
  if (matches1 === null) {
    return false;
  }
  let matches2 = str.match(Reg2);
  if (matches2 === null) {
    return false;
  }
  if (matches1.length === matches2.length) {
    return true
  }
  return false
};
