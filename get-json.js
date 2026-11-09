const getJSON = async (path, params) => {
  const query = new URLSearchParams(params).toString()
  const url = query ? `${path}?${query}` : path

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const json = await response.json()

  if (json.error) {
    throw new Error(json.error)
  }

  return json.data
}
