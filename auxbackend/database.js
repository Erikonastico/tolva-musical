//Express API//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const roteador = require('./rotas/pessoas')
app.use('/auxbackend/pessoas', roteador);

app.listen(PORT, () => console.log('A API está funcionando.'));
