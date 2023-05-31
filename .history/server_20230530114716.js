const http = require('http')

function rqListerner(req, res) {
    console.log(req)
    // process.exit()
}

const server = http.createServer(rqListerner);

server.listen(3000)