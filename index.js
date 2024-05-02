
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./api');
const cors = require('cors');

let app = express();

app.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080', 'http://3.222.27.101:8080']
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost/NetAlmix', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));


  const PORT = process.env.PORT || 8080;

  app.get('/info', (req, res)=>res.send('El módulo de API está funcionando correctamente'));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });


app.use('/api', apiRoutes);

