const fs = require('fs')

const dirname = __dirname

const file1 = '/file.txt'
const encoding = 'utf8'
const file2 = '/copy2.txt'

let readStream = fs.createReadStream(dirname + file1, encoding)
let writeStream = fs.createWriteStream(dirname + file2)

readStream.pipe(writeStream)

