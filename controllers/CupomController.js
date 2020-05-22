const Cupom = require("../models/Cupom");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async store(req, res) {
    const { data, emitente, chave } = req.body;

    try {
      const cupom = await Cupom.create({
        id: uuidv4(),
        data,
        emitente,
        chave,
      });

      return res.json(cupom);
    } catch (err) {
      return res.send(err);
    }
  },

  async index(req, res) {
    const cupons = await Cupom.findAll();
    return res.json(cupons);
  },
};
