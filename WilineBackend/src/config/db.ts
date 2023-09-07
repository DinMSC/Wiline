import { Pool } from "pg";

const pool = new Pool({
  user: "cyhjszxl",
  host: "snuffleupagus.db.elephantsql.com",
  database: "cyhjszxl",
  password: "90UZGiLBChmv9qaimF2AVoZkFLOP9WDH",
  port: 5432,
});

export default pool;
