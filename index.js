var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<p>ambatukam</p>');
    res.end('sup nigga');
}).listen(8000);
console.log("http://localhost:8000")