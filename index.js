#!/usr/bin/env node
const fs = require('fs')

let file = fs.readFileSync('./node_modules/rollup/bin/rollup.js', 'utf-8')
file = file.replace("SHOW_ALTERNATE_SCREEN = '\\u001B[?1049h'", "SHOW_ALTERNATE_SCREEN = ''")
file = file.replace("HIDE_ALTERNATE_SCREEN = '\\u001B[?1049l'", "HIDE_ALTERNATE_SCREEN = ''")

fs.writeFile('./node_modules/rollup/bin/rollup.js', file, (err) => {
    if (err) console.log(err)
    console.log('Done')
})