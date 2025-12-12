const express = require('express');
const dotenv = require('dotenv');
const recetasRoutes = require('./routes/recetasRoutes'); 

dotenv.config();
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/', recetasRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor backend iniciado en puerto ${process.env.PORT}`);
});
