const mongoose = require('mongoose');

const esquemaResena = new mongoose.Schema({
  nick: { type: String, required: true },
  puntuacion: { type: Number, required: true },
  comentario: String
});

const esquemaEpisodio = new mongoose.Schema({
  titulo: { type: String, required: true },
  duracion: Number,
  descripcion: String
});

const esquemaContenido = new mongoose.Schema({
  titulo: { type: String, required: true },
  tipoContenido: { type: String, enum: ['película', 'serie'], required: true },
  descripcion: String,
  valoraciones: [esquemaResena],
  generos: [{ type: String }],
  numeroReproducciones: Number,
  premios: [{ type: String }],
  duracion: { type: Number }, // Solo para películas
  director: { type: String }, // Solo para películas
  episodios: [esquemaEpisodio] // Solo para series
});

const Contenido = mongoose.model('Contenido', esquemaContenido);
module.exports = Contenido;
