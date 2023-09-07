import pool from "../config/db";

export const nekafUnkcija = async () => {
  const result = await pool.query(`SELECT * FROM "users"`);

  console.log(result.rows);
};
