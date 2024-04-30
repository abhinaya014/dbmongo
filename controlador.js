const Contenido = require('.modulos');

// Crear un nuevo contenido
exports.crearContenido = async (req, res) => {
  try {
    const nuevoContenido = new Contenido(req.body);
    await nuevoContenido.save();
    res.status(201).json(nuevoContenido);
  } catch (error) {
    res.status(400).json({ message: "Error al crear contenido", error });
  }
};

// Eliminar un contenido por ID
exports.eliminarContenido = async (req, res) => {
  try {
    const resultado = await Contenido.findByIdAndDelete(req.params.id);
    if (!resultado) {
      return res.status(404).json({ message: "Contenido no encontrado" });
    }
    res.status(200).json({ message: "Contenido eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar contenido", error });
  }
};

// Actualizar un contenido por ID
exports.actualizarContenido = async (req, res) => {
  try {
    const contenido = await Contenido.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contenido) {
      return res.status(404).json({ message: "Contenido no encontrado" });
    }
    res.status(200).json(contenido);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar contenido", error });
  }
};

// Obtener todos los contenidos
exports.obtenerContenidos = async (req, res) => {
  try {
    const contenidos = await Contenido.find({});
    res.status(200).json(contenidos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener contenidos", error });
  }
};

// Obtener un contenido por ID
exports.obtenerContenidoPorId = async (req, res) => {
  try {
    const contenido = await Contenido.findById(req.params.id);
    if (!contenido) {
      return res.status(404).json({ message: "Contenido no encontrado" });
    }
    res.status(200).json(contenido);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener contenido", error });
  }
};
