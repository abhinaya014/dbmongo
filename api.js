const express = require('express');
const router = express.Router();
const controlador = require('./controlador');

// Rutas para manejar el contenido
router.post('/contenidos', controlador.crearContenido);
router.delete('/contenidos/:id', controlador.eliminarContenido);
router.put('/contenidos/:id', controlador.actualizarContenido);
router.get('/series', controlador.obtenerTodasLasSeries);
router.get('/peliculas', controlador.obtenerTodasLasPeliculas);
router.get('/contenidos/genero/:genero', controlador.obtenerContenidoPorGenero);
router.get('/contenidos/top', controlador.obtenerTopContenidos);
router.get('/seri', controlador.obtenerTopSeri);





module.exports = router;
