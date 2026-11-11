import { readFile, writeFile } from 'node:fs/promises'

const [input, mode, custom] = process.argv.slice(2)

try {
  if (mode !== 'encode' && mode !== 'decode') {
    throw new Error('second argument must be "encode" or "decode"')
  }

  const output = custom || (mode === 'encode' ? 'cypher.txt' : 'clear.txt')

  if (mode === 'encode') {
    const data = await readFile(input)
    await writeFile(output, data.toString('base64'))
  } else {
    const data = await readFile(input, 'utf8')
    await writeFile(output, Buffer.from(data, 'base64').toString('utf8'))
  }
} catch (error) {
  console.error('Error:', error.message)
}
