const fs = require('fs')
const http = require('http')


let readStream = fs.createReadStream(__dirname + '/file.txt')


readStream.on('data', chunk => {
	let counter = 1

	setTimeout(() => {
		console.log('Chunk received ' + counter)
		counter += 1
		console.log(chunk.toString())
	}, 2000)


})

/*

setTimeout(() => {
	readStream.pipe(process.stdout)
}, 100)
*/
