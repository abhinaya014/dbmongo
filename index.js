const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./api');
const cors = require('cors');

let app = express();

// Configuración de CORS para permitir solicitudes desde ciertos orígenes
app.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080' , 'http://3.222.27.101:8081' , '3.222.27.101:8080']
}));

// Middleware para parsear cuerpos de solicitud JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost/NetAlmix', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

const PORT = process.env.PORT || 8081;

// Ruta de información básica
app.get('/info', (req, res) => res.send('El mejor servicio web de la historia'));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto: ${PORT}`);
});


app.use('/api', apiRoutes);

