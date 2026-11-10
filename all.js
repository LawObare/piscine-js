const all = (obj) =>
  new Promise((resolve, reject) => {
    const entries = Object.entries(obj);
    const result = {};
    let pending = entries.length;

    if (pending === 0) {
      resolve(result);
      return;
    }

    entries.forEach(([key, value]) => {
      Promise.resolve(value)
        .then((resolved) => {
          result[key] = resolved;
          pending--;
          if (pending === 0) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
