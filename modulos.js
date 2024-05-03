const mongoose = require('mongoose');

const esquemaExperto =new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  cargo: { type: String, required: true },
});

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
  duracion: { type: Number },
  director: { type: String }, 
  episodios: [esquemaEpisodio],
  expertos: [esquemaExperto]

});

const Contenido = mongoose.model('Contenido', esquemaContenido);
module.exports = Contenido;
