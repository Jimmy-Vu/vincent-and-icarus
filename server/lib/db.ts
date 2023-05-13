import pg from 'pg';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

console.log(db); // Add this line

export default db;
