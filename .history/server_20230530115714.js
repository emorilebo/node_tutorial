const http = require('http')

function rqListerner(req, res) {
    console.log(req.url), req.me
    // process.exit()
}

const server = http.createServer(rqListerner);

server.listen(3000)