async function getJSON(path, params) {
  let url = path;

  if (params && Object.keys(params).length > 0) {
    const queryString = new URLSearchParams(params).toString();
    url = `${path}?${queryString}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText || `HTTP error! status: ${response.status}`);
  }

  const result = await response.json();

  if (result && typeof result === 'object' && 'error' in result) {
    throw new Error(result.error);
  }

  if (result && typeof result === 'object' && 'data' in result) {
    return result.data;
  }

  return result;
}
