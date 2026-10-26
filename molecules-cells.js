function RNA(dnaStrand) {
  let rnaResult = "";

  for (let i = 0; i < dnaStrand.length; i++) {
    let base = dnaStrand[i];

    if (base === "G") {
      rnaResult += "C";
    } else if (base === "C") {
      rnaResult += "G";
    } else if (base === "T") {
      rnaResult += "A";
    } else if (base === "A") {
      rnaResult += "U";
    }
  }

  return rnaResult;
}

function DNA(rnaStrand) {
  let dnaResult = "";

  for (let i = 0; i < rnaStrand.length; i++) {
    let base = rnaStrand[i];

    if (base === "C") {
      dnaResult += "G";
    } else if (base === "G") {
      dnaResult += "C";
    } else if (base === "A") {
      dnaResult += "T";
    } else if (base === "U") {
      dnaResult += "A";
    }
  }

  return dnaResult;
}
