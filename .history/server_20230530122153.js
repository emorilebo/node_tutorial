const http = require('http')

function rqListerner(req, res) {
    console.log(req.url, req.method, req.headers) 
    res.se
    process.exit()
}

const server = http.createServer(rqListerner);

server.listen(3000)