const express = require('express');
const router = express.Router();
const {
  createContent,
  deleteContent,
  updateContent,
  getAllSeries,
  getAllMovies,
  getContentsByGenre,
  getTopContents
} = require('./controlador'); // Asegúrate de que la ruta es correcta

router.post('/contents', createContent);
router.delete('/contents/:id', deleteContent);
router.put('/contents/:id', updateContent);
router.get('/series', getAllSeries);
router.get('/movies', getAllMovies);
router.get('/contents/genre/:genre', getContentsByGenre);
router.get('/contents/top', getTopContents);

module.exports = router;
