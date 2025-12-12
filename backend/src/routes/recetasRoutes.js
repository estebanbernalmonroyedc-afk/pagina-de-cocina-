const express = require('express');
const router = express.Router();
const pool = require('../database');  

// Ruta para obtener todas las recetas
router.get('/recetas', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM recetas');
        res.json(rows); 
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router;
