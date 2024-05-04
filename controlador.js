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


exports.eliminarContenido = async function(req, res) {
  try {
    const resultado = await Contenido.findByIdAndDelete(req.params.id);
    if (!resultado) {
      return res.status(404).send('Contenido no encontrado.');
    }

    res.status(200).json({ message: 'Contenido borrado exitosamente' });
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


exports.obtenerTodocontenido = async (req, res) => {
  try {
    const contenido = await contenido.find();
    res.json(contenido);
  }catch {
    res.status(500).json({ message: "Error al obtener contenidos" + error.message})
  }
};


exports.creardocumental = async function(req, res) {
  const nuevoDocumental = new Contenido({
    ...req.body,
    tipoContenido: 'documental'
  });
  try {
    await nuevoDocumental.save();
    res.status(201).json(nuevoDocumental);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



exports.actualizarDocumental = async function(req, res) {
  try {
    const contenidoActualizado = await Contenido.findByIdAndUpdate(
      { _id: req.params.id, tipoContenido: 'documental' },
      req.body,
      { new: true }
    );
    if (!contenidoActualizado) return res.status(404).send('Documental no encontrado.');
    res.json(contenidoActualizado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.obtenerTodosLosDocumentales = async function(req, res) {
  try {
    const documentales = await Contenido.find({ tipoContenido: 'documental' });
    res.json(documentales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.obtenerDocumentalPorExperto = async function(req, res) {
  try {
    const nombre = req.params.nombre;
    const apellido = req.params.apellido;

    const documentales = await Contenido.find({
      tipoContenido: 'documental',
      'expertos.nombre': nombre,
      'expertos.apellido': apellido
    });
    res.json(documentales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.eliminarDocumental = async function(req, res) {
  try {
      const resultado = await Contenido.findByIdAndDelete({
          _id: req.params.id,
          tipoContenido: 'documental'
      });

      if (!resultado) {
          return res.status(404).send('Documental no encontrado.');
      }

      res.status(200).json({ message: 'Elemento borrado', resultado });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};




