async function getJSON(path, params) {
  let url = path;

  if (params) {
    const queryString = new URLSearchParams(params).toString();
    if (queryString) {
      url = `${path}?${queryString}`;
    }
  }

  const response = await fetch(url);

  if (response && response.ok === false) {
    throw new Error(response.statusText || 'Error');
  }

  if (!response || typeof response.json !== 'function') {
    return response;
  }

  let result;
  try {
    result = await response.json();
  } catch (err) {
    throw new Error(response?.statusText || 'Error');
  }

  if (result && typeof result === 'object') {
    if ('error' in result) {
      throw new Error(result.error);
    }
    if ('data' in result) {
      return result.data;
    }
  }

  return result;
}
