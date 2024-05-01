const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./api');
const cors = require('cors');

const app = express();

// Configuración de CORS con URLs corregidas
app.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080', 'http://3.222.27.101:8080', 'http://3.222.27.101']
}));

// Usar express.json() en lugar de bodyParser.json()
app.use(express.json());

// Conectar a MongoDB sin opciones de conexión obsoletas
mongoose.connect('mongodb://localhost/netalmi').then(() => {
    console.log("Database connected successfully");
}).catch(err => {
    console.error("Error connecting to database", err);
});

const PORT = process.env.PORT || 8080;

app.get('/info', (req, res) => res.send('Hello World!'));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});

// Rutas de la API
app.use('/api', apiRoutes);
app.use(cors());
