function neuron(lines) {
  const result = {}

  for (const line of lines) {
    const match = line.match(/^([^:]+):\s*(.*?)\s+-\s+Response:\s*(.*)$/s)
    if (!match) continue // a line that doesn't fit the format is skipped

    const [, rawLabel, content, response] = match

    const category = rawLabel.trim().toLowerCase() // "Questions" -> "questions"
    const singular = category.replace(/s$/, '')    // "questions" -> "question"
    const topic = content
      .toLowerCase()
      .replace(/[?!]/g, '')
      .replace(/ /g, '_')                          // "what is life?" -> "what_is_life"

    if (!Object.hasOwn(result, category)) result[category] = {}
    if (!Object.hasOwn(result[category], topic)) {
      result[category][topic] = { [singular]: content, responses: [] }
    }
    result[category][topic].responses.push(response)
  }

  return result
}
