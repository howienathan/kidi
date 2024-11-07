var fs = require('fs');
fs.rename('mynewfile.txt', 'supniggas.txt', function (err) {
    if (err) throw err;
    console.log('saved')
});