const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//biblioteca requireDir que auxilia nos requires dos models
const requireDir = require('require-dir');

//iniciando o App
const app = express();
//permite o envio de dados para a aplicacao no formato json
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true, useNewUrlParser: true});

requireDir("./src/models");

//'use' usa todo tipo de requisicao 
//-----rotas----
app.use('/api', require('./src/routes')); 

app.listen(3000);