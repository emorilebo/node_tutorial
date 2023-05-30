const http = require('http')

function rqListerner(req, res) {
    console.log(req)
}

const server = http.createServer(rqListerner);

server.listen