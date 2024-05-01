const express = require('express');
const router = express.Router();

// GET: Ruta de prueba para verificar que la API está funcionando
router.get('/info', (req, res) => {
  res.send('API funcionando correctamente');
});

// POST: Ruta de prueba para simular la creación de contenido
router.post('/test', (req, res) => {
  console.log(req.body);  // Imprimir el cuerpo de la solicitud para depuración
  res.status(201).json({ message: "Datos recibidos", yourData: req.body });
});

// GET: Ruta de prueba para obtener datos simulados
router.get('/test', (req, res) => {
  res.json({
    message: "Datos de prueba",
    content: [
      { id: 1, name: "Contenido 1" },
      { id: 2, name: "Contenido 2" }
    ]
  });
});

module.exports = router;
