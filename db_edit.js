const db = require('./db_config');

const sql = `UPDATE siswa
            SET alamat='genuk'
            WHERE id=2`;

db.query(sql, function(err, result){
    if (err) throw err;
    console.log("data berhasil di ubah sbnyk " + result.affectedRows);
});