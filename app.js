const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    console.log("testing to see if this gets called everytime page is refreshed")
    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Eror: File Not Found')

        } else {
            res.write(data)
        }
    })

    res.end()
})

server.listen(port, function (error) {
    if (error) {
        console.log('something went wrong', error)
    } else {
        console.log('server is listening on port ' + port)
    }
})