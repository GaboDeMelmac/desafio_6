import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "joyas",
  password: "274",
  port: 5432,
});

export default pool;
