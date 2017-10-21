const fs = require('fs')

const filePath = 'readme.txt'
const encoding = 'utf-8'
const path = 'writeme.txt'

let readme = fs.readFileSync(filePath, encoding)
let writeme = fs.writeFileSync(path, filePath)


//fs.unlinkSync('../writeme.txt')
//fs.unlinkSync('readme.txt')


/*let a = fs.readFileSync('file-server.js', 'utf-8')

let b = fs.writeFileSync('blah.js', a)


console.log(b)*/


