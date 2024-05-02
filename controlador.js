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


