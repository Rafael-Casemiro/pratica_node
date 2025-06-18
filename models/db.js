const { Sequelize } = require("sequelize");

// configurações sequelize
const sequelize = new Sequelize(
    'cadastro',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

// Teste de conexão com o banco de dados
sequelize.authenticate().then(function() {
    console.log("Banco de dados conectado com sucesso");
    
}).catch(function(erro) {
    console.log("Erro ao se conectar com o banco de dados" + erro);
    
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}