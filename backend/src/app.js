const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const recetasRoutes = require('./routes/recetasRoutes');
app.use('/recetas', recetasRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API funcionando correctamente' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
