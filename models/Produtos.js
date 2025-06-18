const db = require('./db');

// Definindo o modelo da tabela
const Produto = db.sequelize.define(
    'Produtos',
    {
        nome: {
            type: db.Sequelize.STRING,
            allowNull: false
        },
        preco: {
            type: db.Sequelize.DOUBLE,
            allowNull: false
        },
        descricao: {
            type: db.Sequelize.TEXT,
            allowNull: false
        }
    }
);

// Cria a tabela no banco de dados caso ela ainda não existir
Produto.sync({force: false});

// Exportando o modelo
module.exports = Produto;