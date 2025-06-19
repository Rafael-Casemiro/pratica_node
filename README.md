# 🛒 API de Cadastro de Produtos

Este é um projeto Node.js com Express e Sequelize que implementa uma API REST para cadastro, consulta, atualização e listagem de produtos em um banco de dados MySQL.

---

## 📦 Funcionalidades

- ✅ Cadastrar um novo produto (`POST /cadastro`)
- 📄 Listar todos os produtos (`GET /`)
- 🔍 Buscar produtos por nome (`GET /:nome`)
- ✏️ Atualizar produto por ID (`PATCH /atualizar/:id`)

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [body-parser](https://www.npmjs.com/package/body-parser)


---

## ⚙️ Pré-requisitos

- Node.js instalado
- MySQL rodando localmente
- Criar um banco de dados chamado `produtos` (ou como preferir, e ajustar no `db.js`)
- Ter o Sequelize CLI ou configurar a conexão manualmente

---

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Rafael-Casemiro/pratica_node.git
cd pratica_node


