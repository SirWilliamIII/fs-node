const fs = require('fs')

const filePath = 'readme.txt'
const encoding = 'utf-8'
const path = 'writeme.txt'

let readme = fs.readFileSync(filePath, encoding)


let writeme = fs.writeFileSync(path, filePath)


console.log(writeme)

