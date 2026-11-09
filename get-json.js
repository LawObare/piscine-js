async function getJSON(path, params) {
  let url = path;

  if (params && Object.keys(params).length > 0) {
    const queryString = new URLSearchParams(params).toString();
    url = `${path}?${queryString}`;
  }

  let response;
  try {
    response = await fetch(url);
  } catch (e) {
    return;
  }

  if (response && response.ok === false) {
    throw new Error(response.statusText || 'Error');
  }

  if (!response || typeof response.json !== 'function') {
    return;
  }

  let result;
  try {
    result = await response.json();
  } catch (err) {
    return;
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
