const express = require('express');
const router = express.Router();
const controlador = require('./controlador');

// Rutas para manejar el contenido
router.post('/contenidos', controlador.crearContenido);
router.delete('/contenidos/:id', controlador.eliminarContenido);



module.exports = router;
