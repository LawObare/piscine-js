import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const dir = process.argv[2] || '.'

try {
  const files = (await readdir(dir)).filter((file) => file.endsWith('.json'))

  const guests = await Promise.all(
    files.map(async (file) => {
      const { answer } = JSON.parse(await readFile(join(dir, file), 'utf8'))
      const [first, last] = file.slice(0, -'.json'.length).split('_')
      return { name: `${last} ${first}`, answer }
    })
  )

  const vips = guests
    .filter(({ answer }) => String(answer).trim().toLowerCase() === 'yes')
    .map(({ name }) => name)
    .sort((a, b) => a.localeCompare(b))
    .map((name, i) => `${i + 1}. ${name}`)

  await writeFile('vip.txt', vips.join('\n'))
} catch (error) {
  console.error('Error:', error.message)
}
