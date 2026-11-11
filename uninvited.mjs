import { createServer } from 'node:http'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const PORT = 5000

const send = (res, status, body) => {
  res.writeHead(status, { 'Content-Type': 'application/json' })
  res.end(body)
}

const server = createServer(async (req, res) => {
  try {
    if (req.method !== 'POST') throw new Error('method not allowed')

    const { pathname } = new URL(req.url, 'http://localhost')
    const name = decodeURIComponent(pathname.slice(1))

    // Empty name or path traversal such as /..%2Fsecret
    if (!name || /[/\\\0]/.test(name)) throw new Error('invalid guest name')

    const chunks = []
    for await (const chunk of req) chunks.push(chunk)
    const body = Buffer.concat(chunks)

    await writeFile(join('guests', `${name}.json`), body)
    send(res, 201, body)
  } catch {
    send(res, 500, JSON.stringify({ error: 'server failed' }))
  }
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
