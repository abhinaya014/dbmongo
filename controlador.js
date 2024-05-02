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


