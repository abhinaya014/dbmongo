const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./api');
const cors = require('cors');

let app = express();

// Configuración de CORS con URLs corregidas
app.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080', 'http://3.222.27.101:8080']
}));

// Middleware para parsear JSON
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost/netalmix', { useNewUrlParser: true, useUnifiedTopology: true });

// Eventos de conexión
var db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to database"));
db.once('open', function callback() {
    console.log("Database connected successfully");
});

// Definición del puerto y corrección en la variable usada
var port = process.env.PORT || 8080;

// Ruta básica para probar la conexión
app.get('/info', (req, res) => res.send('Hello World!'));

// Iniciando el servidor en todas las interfaces
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
});

// Rutas de la API
app.use('/api', apiRoutes);
