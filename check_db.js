require("dotenv").config({ path: ".env.local" });
const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

async function check() {
    try {
        const client = await pool.connect();
        try {
            const res = await client.query(`SELECT count(*) FROM game_attempts WHERE game_key = 'ISO_SIMULATOR'`);
            console.log("Count:", res.rows[0].count);
        } finally {
            client.release();
        }
    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        await pool.end();
    }
}

check();
