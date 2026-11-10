import { readdir } from 'node:fs/promises'

const dir = process.argv[2] || '.'

try {
  const entries = await readdir(dir)
  console.log(entries.length)
} catch (error) {
  console.error('Error:', error.message)
}
