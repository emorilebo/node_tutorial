const http = require('http')

function rqListerner(req, res) {
    console.log(req)
    process.
}

const server = http.createServer(rqListerner);

server.listen(3000)