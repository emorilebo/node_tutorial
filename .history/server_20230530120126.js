const http = require('http')

function rqListerner(req, res) {
    console.log(req.url, re) 
    // process.exit()
}

const server = http.createServer(rqListerner);

server.listen(3000)