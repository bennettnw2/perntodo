const Pool = require('pg').Pool

const pool = new Pool({
  user: 'root',
  password: 'Pass8264',
  host: 'localhost',
  port: 5432,
  database:'perntodo' 
  
})

module.exports = pool
