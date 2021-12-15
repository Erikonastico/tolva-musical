//Express API//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const roteador = require('./rotas/pessoas')
app.use('/auxbackend/pessoas', roteador);

app.listen(3000, () => console.log('A API está funcionando.'));
