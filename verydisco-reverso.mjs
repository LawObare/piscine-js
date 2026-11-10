import { readFile } from 'node:fs/promises'

const decode = (word) => {
  const mid = Math.floor(word.length / 2)
  return word.slice(mid) + word.slice(0, mid)
}

try {
  const content = await readFile(process.argv[2], 'utf8')
  const result = content.trim().split(' ').map(decode).join(' ')
  console.log(result)
} catch (error) {
  console.error('Error:', error.message)
}
