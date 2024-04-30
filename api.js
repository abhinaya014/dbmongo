const express = require('express');

const Contenido = require('.modulos');  // Asegúrate de tener este modelo correctamente definido
const router = express.Router();
const {
  crearContenido,
  eliminarContenido,
  actualizarContenido,
  obtenerContenidos,
  obtenerContenidoPorId
} = require('../controlador');  // Asegúrate de que la ruta sea correcta

router.post('/contenidos', crearContenido);
router.delete('/contenidos/:id', eliminarContenido);
router.put('/contenidos/:id', actualizarContenido);
router.get('/contenidos', obtenerContenidos);
router.get('/contenidos/:id', obtenerContenidoPorId);

module.exports = router;

// POST: Crear un nuevo contenido
router.post('/contenidos', async (req, res) => {
  try {
    const nuevoContenido = new Contenido(req.body);
    await nuevoContenido.save();
    res.status(201).json(nuevoContenido);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el contenido', error });
  }
});

// DELETE: Eliminar un contenido por ID
router.delete('/contenidos/:id', async (req, res) => {
  try {
    const resultado = await Contenido.findByIdAndDelete(req.params.id);
    if (!resultado) {
      return res.status(404).json({ message: 'Contenido no encontrado' });
    }
    res.status(200).json({ message: 'Contenido eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el contenido', error });
  }
});

// PUT: Actualizar un contenido por ID
router.put('/contenidos/:id', async (req, res) => {
  try {
    const contenidoActualizado = await Contenido.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contenidoActualizado) {
      return res.status(404).json({ message: 'Contenido no encontrado' });
    }
    res.status(200).json(contenidoActualizado);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el contenido', error });
  }
});

// GET: Obtener todos los contenidos
router.get('/contenidos', async (req, res) => {
  try {
    const contenidos = await Contenido.find({});
    res.status(200).json(contenidos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los contenidos', error });
  }
});

// GET: Obtener un contenido por ID
router.get('/contenidos/:id', async (req, res) => {
  try {
    const contenido = await Contenido.findById(req.params.id);
    if (!contenido) {
      return res.status(404).json({ message: 'Contenido no encontrado' });
    }
    res.status(200).json(contenido);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el contenido', error });
  }
});

module.exports = router;
