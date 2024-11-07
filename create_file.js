var fs = require('fs');
fs.appendFile('mynewfile.txt', 'hello mf', function (err) {
    if (err) throw err;
    console.log('saved')
});