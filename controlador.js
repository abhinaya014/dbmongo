const Contenido = require('./modulos');

exports.crearContenido = async (req, res) => {
  const nuevoContenido = new Contenido(req.body);
  try {
    await nuevoContenido.save();
    res.status(201).json(nuevoContenido);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.eliminarContenido = async (req, res) => {
  try {
    const resultado = await Contenido.findByIdAndDelete(req.params.id);
    if (!resultado) return res.status(404).send('Contenido no encontrado.');
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.actualizarContenido = async (req, res) => {
  try {
    const contenidoActualizado = await Contenido.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contenidoActualizado) return res.status(404).send('Contenido no encontrado.');
    res.json(contenidoActualizado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.obtenerTodasLasSeries = async (req, res) => {
  try {
    const series = await Contenido.find({ tipoContenido: 'serie' });
    res.json(series);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.obtenerTodasLasPeliculas = async (req, res) => {
  try {
    const peliculas = await Contenido.find({ tipoContenido: 'película' });
    res.json(peliculas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.obtenerContenidoPorGenero = async (req, res) => {
  try {
    const contenidoPorGenero = await Contenido.find({ generos: req.params.genero });
    res.json(contenidoPorGenero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.obtenerTopContenidos = async (req, res) => {
  try {
    const topContenidos = await Contenido.find().sort({ 'valoraciones.puntuacion': -1 }).limit(10);
    res.json(topContenidos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




