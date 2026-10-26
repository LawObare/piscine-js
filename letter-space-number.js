function letterSpaceNumber(str, arr = []) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let matches = str.match(arr[i]);
      if (matches) {
        result.push(...matches);
      }  
     }
    return result;
};

