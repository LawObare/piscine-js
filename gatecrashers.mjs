import { createServer } from 'node:http'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const PORT = 5000
const PASSWORD = 'abracadabra'
const USERS = new Set(['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'])

const send = (res, status, body, extraHeaders = {}) => {
  res.writeHead(status, { 'Content-Type': 'application/json', ...extraHeaders })
  res.end(body)
}

const isAuthorized = (header = '') => {
  const match = header.match(/^Basic\s+(.+)$/i)
  if (!match) return false

  const decoded = Buffer.from(match[1], 'base64').toString('utf8')
  const sep = decoded.indexOf(':')
  if (sep === -1) return false

  const user = decoded.slice(0, sep)
  const pass = decoded.slice(sep + 1)
  return USERS.has(user) && pass === PASSWORD
}

const server = createServer(async (req, res) => {
  try {
    if (!isAuthorized(req.headers.authorization)) {
      req.resume() // discard any body we are not going to use
      return send(res, 401, 'Authorization Required', {
        'WWW-Authenticate': 'Basic realm="guests"',
      })
    }

    if (req.method !== 'POST') throw new Error('method not allowed')

    const { pathname } = new URL(req.url, 'http://localhost')
    const name = decodeURIComponent(pathname.slice(1))

    // Empty name or path traversal such as /..%2Fsecret
    if (!name || /[/\\\0]/.test(name)) throw new Error('invalid guest name')

    const chunks = []
    for await (const chunk of req) chunks.push(chunk)
    const body = Buffer.concat(chunks)

    await writeFile(join('guests', `${name}.json`), body)
    send(res, 200, body)
  } catch {
    send(res, 500, JSON.stringify({ error: 'server failed' }))
  }
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
