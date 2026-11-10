import { readdir } from 'node:fs/promises'

const dir = process.argv[2] || '.'

try {
  const files = await readdir(dir)

  const names = files
    .filter((file) => file.endsWith('.json'))
    .map((file) => {
      const [first, last] = file.slice(0, -'.json'.length).split('_')
      return `${last} ${first}`
    })
    .sort((a, b) => a.localeCompare(b))

  names.forEach((name, i) => console.log(`${i + 1}. ${name}`))
} catch (error) {
  console.error('Error:', error.message)
}
