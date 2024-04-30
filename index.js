const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./api');  // Asegúrate de tener este archivo configurado con las rutas de tu API.
const cors = require('cors');

const app = express();

// Configuración de CORS para permitir conexiones desde ciertos orígenes
app.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080', 'http://3.222.27.101:8080']
}));

// Uso de bodyParser para parsear cuerpos de solicitud JSON
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost/netalmix', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to database"));
db.once('open', function() {
    console.log("Database connected successfully");
});

// Define un puerto y asegúrate de que el servidor escuche en todas las interfaces
const PORT = process.env.PORT || 8080;
app.get('/info', (req, res) => res.send('Hello from NetAlmix!'));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});

// Uso de rutas de la API
app.use('/api', apiRoutes);

