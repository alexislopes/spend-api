const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Categoria = require("../models/Categoria");
const Cupom = require("../models/Cupom");
const Produto = require("../models/Produto");
const ProdutoCategoria = require("../models/ProdutoCategoria");

const connection = new Sequelize(dbConfig);

User.init(connection);
Categoria.init(connection);
Cupom.init(connection);
Produto.init(connection);
ProdutoCategoria.init(connection);

User.associate(connection.models);
Categoria.associate(connection.models);
Cupom.associate(connection.models);
Produto.associate(connection.models);
// ProdutoCategoria.associate(connection.models);

module.exports = connection;
