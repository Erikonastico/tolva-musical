const roteador = require('express').Router();
const database = require('./data');

roteador.use('/', async (req, res) =>  {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const resultados = await database();
    console.log(resultados);
    res.send(resultados);
});

module.exports = roteador;
