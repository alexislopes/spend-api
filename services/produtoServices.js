const Produto = require("../models/Produto");
const { v4: uuidv4 } = require("uuid");

async function findAll() {
  const produtos = await Produto.findAll({
    include: { association: "categorias" },
  });

  return produtos;
}

async function create(produtos) {
  produtos.forEach((produto) => {
    produto.id = uuidv4();
  });

  const prod = await Produto.bulkCreate(produtos);

  return prod;
}

module.exports = { findAll, create };
