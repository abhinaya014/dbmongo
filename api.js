const express = require('express');
const router = express.Router();

router.get('/api', function (req, res) {
    res.json({
        status: 'Api trabajando',
        message: 'Bienvenid@s al mejor WS del mundo'
    });
});


router.get('/info',(req, res)=>{
    res.send('Hello World!');
});

module.exports = router;