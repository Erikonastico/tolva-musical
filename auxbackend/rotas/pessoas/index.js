const roteador = require('express').Router();

roteador.use('/auxbackend/pessoas', (req, res) =>  {
    res.send('Ok');
});

module.exports = roteador;
