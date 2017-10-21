const http = require('http')
const fs = require('fs')

const port = 4000

const server = http.createServer()

server.on('request', (req, res) => {
	fs.readFile('./file.txt', (err, data) => {
		if(err) throw err

		res.end(data)
	})
})

server.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
