const Produto = require("../models/Produto");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async store(req, res) {
    var produtos = req.body;

    produtos.forEach((produto) => {
      produto.id = uuidv4();
    });

    try {
      const prod = await Produto.bulkCreate(produtos);

      return res.json(prod);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async index(req, res) {
    const produtos = await Produto.findAll({
      include: { association: "categorias" },
    });
    return res.json(produtos);
  },
};
