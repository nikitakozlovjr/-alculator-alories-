import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  password: "qwerty",
  host: "localhost",
  port: 5432,
  database: "health_clover"
});


export default pool;