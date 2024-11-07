var db = require('./db_config');

const sql = "Create DATABASE kidi_SMKN8";
db.query(sql, function (err, result){
    if (err) throw err;
    console.log("database terbuat");
});