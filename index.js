const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const apiRoutes = require ('./api');
const cors = require ('cors');

let app = express ();


app.use(cors({ origin: ['http://localhost:8080', 'http;//127.0.0.1:8080', 'http://3.222.27.101']
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/netakmi', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
if (!db) {
    console.log("Error connecting db");
} else {
    console.log("Db connected successfully");
}

var port = process.env.PORT || 8080;
app.get('/info', (req, res) => res.send('Hello World!'));

app.listen(port, function(){
    console.log('Running on port ' + port);
});

app.use('/api', apiRoutes);