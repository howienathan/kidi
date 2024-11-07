var fs = require('fs');
var http = require('http');

http.createServer(function (req, res){
    fs.readFile('sigma.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();  
      });
}).listen(8000);

console.log("server berjalan di http://localhost:8000");