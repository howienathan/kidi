const db = require('./db_config');

const sql = `
    INSERT INTO siswa (nama, alamat)
    VALUES ('wahitukam', 'Ngawi')`;


db.query(sql, function (err, result){
    if (err) throw err;
    console.log('1 data ditamvbah');
});