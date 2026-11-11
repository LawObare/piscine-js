import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const PORT = 5000

const send = (res, status, body) => {
  res.writeHead(status, { 'Content-Type': 'application/json' })
  res.end(body)
}

const server = createServer(async (req, res) => {
  try {
    const { pathname } = new URL(req.url, 'http://localhost')
    const name = decodeURIComponent(pathname.slice(1))

    // Block path traversal such as /..%2Fsecret
    if (/[/\\\0]/.test(name)) {
      return send(res, 404, JSON.stringify({ error: 'guest not found' }))
    }

    const content = await readFile(join('guests', `${name}.json`), 'utf8')
    send(res, 200, content)
  } catch (error) {
    if (error.code === 'ENOENT' || error instanceof URIError) {
      send(res, 404, JSON.stringify({ error: 'guest not found' }))
    } else {
      send(res, 500, JSON.stringify({ error: 'server failed' }))
    }
  }
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
