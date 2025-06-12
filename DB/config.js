import pg from 'pg';
import 'dotenv/config';

const pool = new pg.Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    allowExitOnIdle: true,
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Conexion a la base de datos exitosa:', res.rows[0].now);
    }
})

export default pool;