function throttle(func, wait) {
  let isThrottled = false;

  return function (...args) {
    const context = this;

    if (!isThrottled) {
      func.apply(context, args);
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
      }, wait);
    }
  };
}

function opThrottle(func, wait, options = {}) {
  let timeoutId = null;
  let lastArgs = null;
  let lastContext = null;

  const leading = !!options.leading;
  const trailing = !!options.trailing;

  return function (...args) {
    const context = this;

    const wrapper = () => {
      timeoutId = null;
      if (trailing && lastArgs) {
        func.apply(lastContext, lastArgs);
        lastArgs = null;
        lastContext = null;
        timeoutId = setTimeout(wrapper, wait);
      }
    };

    if (!timeoutId) {
      if (leading) {
        func.apply(context, args);
      } else if (trailing) {
        lastArgs = args;
        lastContext = context;
      }
      
      if (leading || trailing) {
        timeoutId = setTimeout(wrapper, wait);
      }
    } else if (trailing) {
      lastArgs = args;
      lastContext = context;
    }
  };
}
