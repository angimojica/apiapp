// user.controller.js

import { pool } from '../db.js';

export const getUser = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error('Error al obtener usuario por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const postUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const { rows } = await pool.query(
      'INSERT INTO usuarios (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );

    res.status(201).json(rows[0]); // Respondemos con el primer usuario insertado
  } catch (error) {
    console.error('Error al insertar usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const putUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const { rows } = await pool.query(
      'UPDATE usuarios SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado para actualizar' });
    }

    res.json(rows[0]); // Respondemos con el usuario actualizado
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
