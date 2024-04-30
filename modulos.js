const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema para las valoraciones
const valoracionSchema = new Schema({
  nick: { type: String, required: true },
  puntuacion: { type: Number, required: true, min: 0, max: 10 },
  comentario: { type: String, default: '' }
});

// Schema para los capítulos (solo aplicable a series)
const capituloSchema = new Schema({
  titulo: { type: String, required: true },
  duracion: { type: Number, required: true },  // Duración en minutos
  descripcion: { type: String, required: true }
});

// Schema principal para contenido
const contenidoSchema = new Schema({
  titulo: { type: String, required: true },
  tipo: { type: String, required: true, enum: ['serie', 'película'] },
  descripcion: { type: String, required: true },
  valoraciones: [valoracionSchema],
  generos: [{ type: String, required: true }],
  numero_reproducciones: { type: Number, default: 0 },
  premios: [{ type: String }],
  duracion: { type: Number },  // Solo para películas, en minutos
  director: { type: String },  // Solo para películas
  capitulos: [capituloSchema]  // Solo para series
});

const Contenido = mongoose.model('Contenido', contenidoSchema);

module.exports = Contenido;
