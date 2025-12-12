const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

const recetas = [
  {
    id: 1,
    nombre: "Spaghetti Carbonara",
    descripcion: "Deliciosa pasta con salsa cremosa de queso y tocino.",
    imagen: "https://via.placeholder.com/300x200"
  },
  {
    id: 2,
    nombre: "Ensalada César",
    descripcion: "Ensalada fresca con pollo, lechuga y aderezo César.",
    imagen: "https://via.placeholder.com/300x200"
  },
  {
    id: 3,
    nombre: "Tacos al Pastor",
    descripcion: "Tacos mexicanos con carne de cerdo marinada y piña.",
    imagen: "https://via.placeholder.com/300x200"
  }
];

app.get('/recetas', (req, res) => {
  res.json(recetas);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend iniciado en puerto ${PORT}`);
});
