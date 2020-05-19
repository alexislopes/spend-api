const Categoria = require("../../models/Categoria");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async store(req, res) {
    const { descricao } = req.body;

    try {
      const categoria = await Categoria.create({ id: uuidv4(), descricao });

      return res.json(categoria);
    } catch (err) {
      return res.send(err);
    }
  },

  async index(req, res) {
    const categorias = await Categoria.findAll();

    return res.json(categorias);
  },
};
