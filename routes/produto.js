const { findAll, create } = require("../services/produtoServices");

module.exports = (app) => {
  app.get("/", (req, res) => {
    return res.status(200).json({ status: "workin'" });
  });

  app.post("/produto", async (req, res) => {
    const produtos = req.body;
    const prods = await create(produtos);

    res.status(201).json(prods);
  });

  app.get("/produto", async (req, res) => {
    const prods = await findAll();

    res.status(200).json(prods);
  });
};
