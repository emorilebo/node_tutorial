const http = require('http')

function rqListerner(req, res) {
    console.log(req.url, req.method, req.headers) 
    const url = req.url
    if(url === )
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<h1>My first message</h1>')
    res.write('</html>')
    res.end()
    // process.exit()
}

const server = http.createServer(rqListerner);

server.listen(3000)