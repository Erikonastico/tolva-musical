//Express API//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

const roteador = require('./rotas/pessoas')
app.use('/backend/pessoas', roteador);

app.listen(PORT, () => console.log('A API está funcionando.'));