#!/usr/bin/env node

const cpy = require('cpy')
const path = require('path')

class copyLib {
  constructor() {
    const { src, dst, lib } = require(this.argv('data'))
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
  argv(key) {
    const arg = process.argv.filter(val => val.startsWith('--' + key))
    return arg.length ? arg.pop().split('=').pop() : null
  }
}

(async function () {
  await new copyLib().run()
})()