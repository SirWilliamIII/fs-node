const http = require('http')
const fs = require('fs')


const port = 3000

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' })


	let readStream = fs.createReadStream(__dirname + '/file.txt', 'utf8')

	readStream.pipe(res)

})

server.listen(port, '0.0.0.0', () => {
	console.log(`Listening on port ${port}`)
})
