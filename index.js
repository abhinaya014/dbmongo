const express = require('express');
const app = express();

app.get('/info', (req, res) => {
  res.send('Hello World!');
});

const PORT = 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
