const db = require('./db_config');

const sql = "INSERT INTO siswa (nama, alamat) VALUES ?";
const values = [
    ["al ghaza", "semarang"],
    ["el", "semarang"],
    ["mahes", "semarang"],
    ["sico", "semarang"],
    ["fadil", "semarang"],
];

db.query(sql, [values], function (err, result){
    if (err) throw err;
    console.log("data telah ditambah" + result.affectedRows);
});