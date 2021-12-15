const pool = require('../../db/db');

//Posts//
module.exports = async function getPosts() {
  let conn;
  let rows;
  try {
    conn = await pool.getConnection();
    console.log("Conectou!");
    rows = await conn.query("SELECT * FROM postTable");
  } catch (err) {
    throw err;
  } finally {
    return JSON.stringify(rows);
  }
};