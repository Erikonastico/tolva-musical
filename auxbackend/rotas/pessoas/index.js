const roteador = require('express').Router();

roteador.use('/backend/pessoas', (req, res) =>  {
    res.send('Ok');
});

module.exports = roteador;