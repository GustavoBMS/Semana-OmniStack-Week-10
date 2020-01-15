//Mini Framework Express
const express = require('express');

//Importa as rotas
const routes = require('./routes');

//Atribuindo Express a uma variavel Constante
const app = express();

//conexao com o mongodb
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gustavo:gustavo@cluster0-kocau.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Porta aonde o Express esta alocado
app.listen(3333);

//Fazer com que o express entenda json
app.use(express.json());
app.use(routes);