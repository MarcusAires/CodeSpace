let server = http.createServer(function(req, res){
    
    let body = "hello world!"
    
    res.writeHead(200,{
        'Content-Length': body.length,
        'Content-Type':'text/plain'
    })
    res.end(body)
})

server.listen(8080)

