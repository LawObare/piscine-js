function debounce(func, wait) {
  let timeoutId;

  return function (...args) {
    const context = this;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

function opDebounce(func, wait, options = {}) {
  let timeoutId = null;
  const leading = !!options.leading;

  return function (...args) {
    const context = this;
    const shouldCallNow = leading && !timeoutId;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!leading) {
        func.apply(context, args);
      }
    }, wait);

    if (shouldCallNow) {
      func.apply(context, args);
    }
  };
}
