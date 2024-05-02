const { Content } = require('./modulos'); // Asegúrate de que este es el camino correcto para importar el modelo Content

// Alta de un contenido (POST)
exports.createContent = async (req, res) => {
  try {
    const newContent = new Content(req.body);
    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Baja de un contenido (DELETE)
exports.deleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Content.findByIdAndDelete(id);
    if (!result) return res.status(404).json({ message: "Content not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Modificación de un contenido (PUT)
exports.updateContent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContent = await Content.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedContent) return res.status(404).json({ message: "Content not found" });
    res.json(updatedContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtención de todas las series (GET)
exports.getAllSeries = async (req, res) => {
  try {
    const series = await Content.find({ contentType: 'series' });
    res.json(series);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtención de todas las películas (GET)
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Content.find({ contentType: 'movie' });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtención de películas/series por género (GET)
exports.getContentsByGenre = async (req, res) => {
  try {
    const { genre } = req.params;
    const contents = await Content.find({ genres: genre });
    res.json(contents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtención del top 10 de películas o series en función de su puntuación media (GET)
exports.getTopContents = async (req, res) => {
  try {
    const contents = await Content.aggregate([
      { $unwind: '$reviews' },
      { $group: {
        _id: '$_id',
        title: { $first: '$title' },
        averageScore: { $avg: '$reviews.score' }
      }},
      { $sort: { averageScore: -1 }},
      { $limit: 10 }
    ]);
    res.json(contents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
