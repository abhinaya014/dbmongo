const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola NetAlmix!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});


router.get('/info',(req, res)=>{
    res.send('Hello World!');
});

module.exports = router;