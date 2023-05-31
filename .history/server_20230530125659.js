const http = require('http')

function rqListerner(req, res) {
    console.log(req.url, req.method, req.headers) 
    const url = req.url
    if(url === '/'){
        // res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form><input type="text" name=""/></form></body>')
        res.write('</html>')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<h1>My first message</h1>')
    res.write('</html>')
    return res.end()
    
    // process.exit()
}

const server = http.createServer(rqListerner);

server.listen(3000)