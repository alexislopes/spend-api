const ProdutoCategoria = require("../../models/ProdutoCategoria");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async store(req, res) {
    const { idProduto, idCategoria } = req.body;

    console.log(idProduto + " " + idCategoria);

    try {
      const prod = await ProdutoCategoria.create({
        id_categoria: idCategoria,
        id_produto: idProduto,
      });

      return res.json(prod);
    } catch (err) {
      return res.send(err);
    }
  },

  async index(req, res) {
    const produtoCategorias = await ProdutoCategoria.findAll();
    return res.json(produtoCategorias);
  },
};
