const express = require('express')
const fs = require('fs')
const app = express()
const http = require('http').Server(app)
const open = require('open')

const PORT = 8000

if(process.env.NODE_ENV === 'production') {
    const compression = require('compression')
    app.use(compression())
}

app.use(express.static('../build'))

app.get('*', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(fs.readFileSync('index.html'))
})

const server = http.listen(PORT, function() {
    console.log('Server listening on 8000')
    open('http://localhost:' + PORT)
})

module.exports = server
