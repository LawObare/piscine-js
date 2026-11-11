import { readFile, writeFile, rm } from 'node:fs/promises'

const [file, command, item, quantity] = process.argv.slice(2)

const HELP = [
  'Commands:',
  '- create: takes a filename as argument and create it (should have `.json` extension specified)',
  '- delete: takes a filename as argument and delete it',
  '- add: takes a filename, an item name, and optionally a quantity; adds or increases the item in the list',
  '- rm: takes a filename, an item name, and optionally a quantity; removes or decreases the item in the list',
  '- ls: prints all items and quantities, or "Empty list." if there are none',
  '- help: displays all available commands',
].join('\n')

const load = async () => {
  try {
    return JSON.parse(await readFile(file, 'utf8'))
  } catch {
    return {}
  }
}

const save = (list) => writeFile(file, JSON.stringify(list, null, 2))

// One rule for both commands: add the delta, and drop the item if it ends up at 0 or below
const change = (list, name, delta) => {
  const current = Object.hasOwn(list, name) ? list[name] : 0
  const total = current + delta
  if (total > 0) list[name] = total
  else delete list[name]
}

try {
  if (file === 'help' || !command || command === 'help') {
    console.log(HELP)
  } else if (command === 'create') {
    await writeFile(file, '{}')
  } else if (command === 'delete') {
    await rm(file, { force: true })
  } else if (command === 'ls') {
    const entries = Object.entries(await load())
    if (entries.length === 0) console.log('Empty list.')
    else entries.forEach(([name, qty]) => console.log(`- ${name} (${qty})`))
  } else if (command === 'add' || command === 'rm') {
    if (!item) throw new Error(`"${command}" needs an item name`)

    const list = await load()

    if (command === 'add') {
      const n = quantity === undefined ? 1 : Number(quantity)
      if (Number.isNaN(n)) throw new Error('quantity must be a number')
      change(list, item, n)
    } else if (quantity === undefined) {
      delete list[item]
    } else {
      const n = Number(quantity)
      if (Number.isNaN(n)) {
        console.log('Unexpected request: nothing has been removed')
        process.exit(0)
      }
      change(list, item, -n)
    }

    await save(list)
  } else {
    console.log(HELP)
  }
} catch (error) {
  console.error('Error:', error.message)
}
