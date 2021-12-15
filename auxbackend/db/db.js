//Connection//
const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'dcrhg4kh56j13bnu.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
     port: 3306, 
     user:'k4rg7ro6invrsb68', 
     password: 'rvb6jr4m3at7cfxn',
     database: 'xtv5di2zftsr2vpw',
     connectionLimit: 5
});

//Posts//
async function getPosts() {
  let conn;
  try {
	conn = await pool.getConnection();
    console.log("Conectou!");
    const rows = await conn.query("SELECT * FROM postTable");
	console.log(rows);
  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}

async function doubleAsyncFunction() {
await getPosts();
process.exit();
};

doubleAsyncFunction();

module.exports = pool;