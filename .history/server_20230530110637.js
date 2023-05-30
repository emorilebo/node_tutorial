const http = require('http')

function rqListerner(req, res) {
    console.log(req)
}

http.createServer(rqListerner);