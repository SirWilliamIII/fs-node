const fs = require('fs')

const file1 = '/file.txt'
const encoding = 'utf8'
const file2 = '/copy_file2.txt'

let readStream = fs.createReadStream(__dirname + file1, encoding)
let writeStream = fs.createWriteStream(__dirname + file2)

readStream.pipe(writeStream)
