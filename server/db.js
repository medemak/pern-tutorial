const Pool = require('pg').Pool;

const pool = new Pool({
    user:"todo",
    password:"root",
    host:'localhost',
    port:5432,
    database:'perntodo'
})
module.export = pool;