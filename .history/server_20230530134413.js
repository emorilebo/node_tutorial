const http = require('http')

const server  = http.createServer(req, res) =>{
    console.log(req.url, req.method, req.headers) 
    const url = req.url
    if(url === '/'){
        // res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url ==='/message' && method ==='POST'){
        fs.writeFileSync('message.txt', 'Hello Godfrey' )
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<h1>My first message</h1>')
    res.write('</html>')
    return res.end()
    
    // process.exit()
}



server.listen(3000)