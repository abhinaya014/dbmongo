const mongoose = require('mongoose');

// Configuración de la conexión a MongoDB
const connectionString = 'mongodb://localhost/netalmi';
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Definición del esquema para los comentarios o reseñas
const reviewSchema = new mongoose.Schema({
  nick: String,
  score: Number,
  comment: String
}, { _id: false });

// Definición del esquema para los episodios de las series
const episodeSchema = new mongoose.Schema({
  title: String,
  duration: Number,
  description: String
}, { _id: false });

// Definición del esquema principal para el contenido (películas y series)
const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  contentType: { type: String, required: true, enum: ['movie', 'series'] },
  description: String,
  reviews: [reviewSchema],
  genres: [{ type: String }],
  numPlays: Number,
  awards: [String],
  // Campos específicos para películas
  duration: { type: Number, default: 0 },
  director: String,
  // Campos específicos para series
  episodes: [episodeSchema]
});

// Creación del modelo a partir del esquema
const Content = mongoose.model('Content', contentSchema);

// Exportación del modelo y cualquier otra configuración o modelo necesario
module.exports = {
  Content
};
