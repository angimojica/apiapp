// user.routes.js

import { Router } from 'express';
import * as crlUSER from '../controller/user.controller.js';

const router = Router();

// Rutas para obtener usuarios
router.get('/users', crlUSER.getUser); // Obtener todos los usuarios
router.get('/users/:id', crlUSER.getUserById); // Obtener un usuario por su ID

// Rutas para crear y actualizar usuarios
router.post('/users', crlUSER.postUser); // Crear un nuevo usuario
router.put('/users/:id', crlUSER.putUser); // Actualizar un usuario existente por su ID

export default router;
