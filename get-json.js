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

  try {
    const result = await response.json();

    if (result && typeof result === 'object') {
      if ('error' in result) {
        throw new Error(result.error);
      }
      if ('data' in result) {
        return result.data;
      }
    }
    return result;
  } catch (err) {
    if (err instanceof Error && (err.message === 'Error' || err.message === response?.statusText || err.message === result?.error)) {
      throw err;
    }
    throw new Error(response?.statusText || 'Error');
  }
}
