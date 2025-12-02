const DB = require('../config/database');

class RecetasModel {

    static async obtenerRecetas() {
        const [rows] = await DB.query('SELECT * FROM recetas');
        return rows;
    }

    static async obtenerPorId(id) {
        const [rows] = await DB.query('SELECT * FROM recetas WHERE id = ?', [id]);
        return rows[0]; 
    }
}

module.exports = RecetasModel;
