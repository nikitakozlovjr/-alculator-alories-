import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  password: "home2024",
  host: "localhost",
  port: 5432,
  database: "health_clover"
});


export default pool;