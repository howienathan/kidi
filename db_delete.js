const db = require('./db_config');

const sql = `DELETE FROM siswa`;

db.query(sql, function (err, result){
    if (err) throw err;
    console.log(`data berhasil di hapus ${result.affectedRows}`);
});