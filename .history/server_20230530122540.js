const http = require('http')

function rqListerner(req, res) {
    console.log(req.url, req.method, req.headers) 
    res.setHeader('Content-Type', 'text/html')
    res.write('<html></html>')
    res.write('<h1>My first message</h1>')
    res.
    res.end()
    // process.exit()
}

const server = http.createServer(rqListerner);

server.listen(3000)