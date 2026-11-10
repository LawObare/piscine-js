const race = (values) =>
  new Promise((resolve, reject) => {
    values.forEach((value) => {
      Promise.resolve(value).then(resolve, reject);
    });
  });

const some = (values, count) =>
  new Promise((resolve) => {
    if (values.length === 0 || count < 1) {
      resolve([]);
      return;
    }

    const collected = [];

    values.forEach((value, index) => {
      Promise.resolve(value).then(
        (resolved) => {
          if (collected.length >= count) return;

          collected.push({ index, value: resolved });

          if (collected.length === count) {
            resolve(
              collected
                .sort((a, b) => a.index - b.index)
                .map((item) => item.value)
            );
          }
        },
        () => {} // ignore rejections
      );
    });
  });
