const express = require("express");
const app = express();
const Produtos = require('./models/Produtos');
const body_parser = require('body-parser');

// Configuração bodyParser
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

// Rota post para cadastrar um produto no banco de dados
app.post("/cadastro", (req, res) => {
    Produtos.create({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao
    }).then(function() {
        res.send("Produto cadastrado com sucesso");
    }).catch(function(erro) {
        res.send("Erro ao cadastrar produto " + erro);
    })
});

// Rota get para buscar um produto no banco de dados
app.get("/", (req, res) => {
    Produtos.findAll().then(function(produtos) {
        res.send({produtos: produtos});
    }).catch(function(erro) {
        res.send("Erro ao buscar os dados " + erro);
    })
});

// Rota patch para atualizar os dados de um produto com base no ID
app.patch("/atualizar/:id", (req, res) => {
    Produtos.update({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao
    },
    {
        where: {'id': req.params.id}
    }
    ).then(function() {
        res.send("Sucesso ao atualizar os dados do produto!");
    }).catch(function() {
        res.send("Erro ao atualizar os dados do produto!");
    })
});


// Rota get para buscar produtos pelo nome
app.get("/:nome", (req, res) => {
    Produtos.findAll({where: {"nome": req.params.nome}}).then(function(produto) {
        res.send(produto);
    }).catch(function(erro) {
        res.send("Produto não existe no banco de dados " + erro);
    });
});

// Inicializa o servidor na porta 8081
app.listen(8081, function() {
    console.log("Servidor funcionando na porta 8081");
    
});