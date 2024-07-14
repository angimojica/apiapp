// index.js
import express from 'express';
import { PORT } from './config.js'; 
import userRoutes from './routes/user.routes.js'; 
import morgan from 'morgan';

const app = express();

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Middleware para el logging de las solicitudes HTTP
app.use(morgan("dev"));

// Configuración de las rutas
app.use('/api', userRoutes);

// Inicio del servidor
app.listen(PORT, () => {
    console.log('El servidor está corriendo en el puerto', PORT);
});
