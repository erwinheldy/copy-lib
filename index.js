#!/usr/bin/env node

const fs = require('fs')
const cpy = require('cpy')
const path = require('path')

class copyLib {
  constructor() {
    const { src, dst, lib } = this.getData()
    this.src = src
    this.dst = dst
    this.lib = lib
  }
  async run() {
    for (const [key, value] of Object.entries(this.lib)) {
      const source = path.join(this.src, key)
      const destination = path.join(this.dst, value)
      await cpy(source, destination)
      console.log(`Copied ${source} >> ${destination}`)
    }
  }
  getData() {
    try {
      return JSON.parse(fs.readFileSync(this.argv('data'), 'utf-8'))
    } catch (error) {
      return this.getData() // sometimes the data is empty, so we have to get it again
    }
  }
  argv(key) {
    const arg = process.argv.filter(val => val.startsWith('--' + key))
    return arg.length ? arg.pop().split('=').pop() : null
  }
}

(async function () {
  await new copyLib().run()
})()