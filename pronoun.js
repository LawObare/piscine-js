function pronoun(str) {
  const result = {};
  const pronouns = new Set(['i', 'you', 'he', 'she', 'it', 'they', 'we']);

  const words = str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 0);

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];

    if (pronouns.has(currentWord)) {
      if (!result[currentWord]) {
        result[currentWord] = { word: [], count: 0 };
      }

      result[currentWord].count += 1;

      const nextWord = words[i + 1];
      if (nextWord && !pronouns.has(nextWord)) {
        result[currentWord].word.push(nextWord);
      }
    }
  }

  return result;
}
