const db = require('./db_config');

const sql = `CREATE TABLE siswa 
( 
    id int NOT NULL AUTO_INCREMENT, 
    nama VARCHAR(255),
    alamat VARCHAR (255), 
    PRIMARY KEY (id)
)`;

db.query(sql, function (err, result){
    if (err) throw err;
    console.log('table terbuat');
});
