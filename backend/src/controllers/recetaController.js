const RecetasModel = require('../models/recetaModel');

class RecetaController {

    static async obtenerRecetas(req, res) {
        try {
            const recetas = await RecetasModel.obtenerRecetas();
            res.json({
                success: true,
                data: recetas
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async obtenerPorId(req, res) {
        try {
            const { id } = req.params;
            const receta = await RecetasModel.obtenerPorId(id);
            if (!receta) {
                return res.status(404).json({ success: false, message: 'Receta no encontrada' });
            }
            res.json({ success: true, data: receta });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = RecetaController;
