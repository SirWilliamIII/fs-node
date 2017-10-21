const http = require('http')
//const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	res.end('Holla back, bitch')
})

server.listen(port, '0.0.0.0', () => {
	console.log(`Listening on port ${port}`)
})
