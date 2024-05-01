const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./api');
const cors = require('cors');

let app = express();

// Configuración de CORS con URLs corregidas
app.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080', 'http://3.222.27.101:8080', 'http://3.222.27.101']
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/netalmi', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to database"));
db.once('open', function callback() {
    console.log("Database connected successfully");
});

var port = process.env.PORT || 8080;

app.get('/info', (req, res) => res.send('Hello World!'));

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
});

app.use('/api', apiRoutes);
