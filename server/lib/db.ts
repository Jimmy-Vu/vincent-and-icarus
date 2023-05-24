import pg from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export default db;
