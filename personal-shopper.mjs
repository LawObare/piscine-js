import { readFile, writeFile, rm } from 'node:fs/promises'

const [file, command, elem, quantity] = process.argv.slice(2)

const HELP = [
  'Commands:',
  '- create: takes a filename as argument and create it (should have `.json` extension specified)',
  '- delete: takes a filename as argument and delete it',
  '- add: takes a filename, an item name, and optionally a quantity; adds or increases the item in the list',
  '- rm: takes a filename, an item name, and optionally a quantity; removes or decreases the item in the list',
  '- ls: prints all items and quantities, or "Empty list." if there are none',
  '- help: displays all available commands',
].join('\n')

// Falls back to {} when the file is absent or unreadable
const load = async () => {
  try {
    return JSON.parse(await readFile(file, 'utf8'))
  } catch {
    return {}
  }
}

const save = (list) => writeFile(file, JSON.stringify(list, null, 2))

// Add `delta` to the item; an item that ends at 0 or below is removed
const change = (list, name, delta) => {
  const current = Object.hasOwn(list, name) ? list[name] : 0
  const total = current + delta
  if (total > 0) list[name] = total
  else delete list[name]
}

const main = async () => {
  if (file === 'help' || !command || !['create', 'delete', 'add', 'rm', 'ls'].includes(command)) {
    console.log(HELP)
    return
  }

  if (command === 'create') {
    await writeFile(file, '{}')
    return
  }

  if (command === 'delete') {
    await rm(file, { force: true })
    return
  }

  if (command === 'ls') {
    const entries = Object.entries(await load())
    if (entries.length === 0) console.log('Empty list.')
    else entries.forEach(([name, qty]) => console.log(`- ${name} (${qty})`))
    return
  }

  // add / rm
  if (!elem) {
    console.error('No elem specified.')
    return
  }

  const list = await load()

  if (command === 'add') {
    const n = Number(quantity)
    change(list, elem, Number.isNaN(n) ? 1 : n) // missing or NaN quantity → 1
  } else if (quantity === undefined) {
    if (!Object.hasOwn(list, elem)) return // not in the list: do nothing
    delete list[elem]
  } else {
    const n = Number(quantity)
    if (Number.isNaN(n)) {
      console.log('Unexpected request: nothing has been removed')
      return
    }
    change(list, elem, -n) // negative n adds, and creates the item if needed
  }

  await save(list)
}

try {
  await main()
} catch (error) {
  console.error(error.message)
}
