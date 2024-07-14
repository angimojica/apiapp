import pg from 'pg';

export const pool = new pg.Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'Angi3224534636',
  database: 'userspg',
  port: 5432, // Puerto por defecto de PostgreSQL
});


async function conectar() {
    try {
      const client = await pool.connect();
      console.log('Conectado a la base de datos');
      client.release(); // Liberar el cliente después de usarlo
    } catch (error) {
      console.log('Error al conectar a la base de datos', error);
    }
  }
  conectar().catch(error => console.log('Error al conectar a la base de datos de datos',error));