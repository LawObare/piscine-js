function retry(count, callback) {
  return async function (...args) {
    let lastError;
    
    for (let attempts = 0; attempts <= count; attempts++) {
      try {
        return await callback(...args);
      } catch (error) {
        lastError = error;
      }
    }
    
    throw lastError;
  };
}

function timeout(delay, callback) {
  return function (...args) {
    const timerPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('timeout'));
      }, delay);
    });

    const callbackPromise = Promise.resolve().then(() => callback(...args));

    return Promise.race([callbackPromise, timerPromise]);
  };
}
