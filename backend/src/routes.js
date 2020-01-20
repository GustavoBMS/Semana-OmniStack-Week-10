const {Router} = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//rotas pegas dos controllers

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

//Exportar as rotas
module.exports = routes;













//Comentarios Antigos abaixo

//yarn add nodemon -D atualiza mudanças constantemente
//Métodos HTTP: Get (Busca), Post(Criar), Put(Editar), Delete(Apagar, dããã)
//Banco de dados relacional é bom quando se trata de uma aplicação com muitos relacionamentos, agora um nao relacional e utilizado quando tem poucos

//Tipos de parametros:
//Query Params: req(ou Request).query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.params (Dados para criação ou alteração de um registro)

/*  
Primeira parte que foi feita, nao vem ao caso continuar usando

//Rotas, request é solicitado no front e o response fica dentro da arrow function
routes.get('/', (request, response) => {
    return response.json({
    Mensagem: "Hello World!", 
    Mensagem2: "Salve Grandioso OmniStack!"});
});

//Rotas, request utilizando query
routes.get('/', (request, response) => {
    console.log(request.query);
    return response.json({
    Mensagem: "Hello World!", 
    Mensagem2: "Salve Grandioso OmniStack!"});
});

//Rotas, request utilizando Route, route pelo que entendi é utilizado com Put e Delete
routes.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({
    Mensagem: "Hello World!", 
    Mensagem2: "Salve Grandioso OmniStack!"});
});

//Rotas, request utilizando Body para criação ou alteração
routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({
    Mensagem: "Hello World!", 
    Mensagem2: "Salve Grandioso OmniStack!"});
});

Fim Primeira parte que foi feita, nao vem ao caso continuar usando 
*/