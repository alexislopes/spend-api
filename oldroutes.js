const express = require("express");
const UserController = require("./controllers/UserController");
const CategoriaController = require("./controllers/CategoriaController");
const CupomController = require("./controllers/CupomController");
const ProdutoController = require("./controllers/ProdutoController");
const ProdutoCategoriaController = require("./controllers/ProdutoCategoriaController");

// const routes = express.Router();

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Eai");
  });

  app.get("/users", UserController.index);
  app.post("/users", UserController.store);

  app.post("/categorias", CategoriaController.store);
  app.get("/categorias", CategoriaController.index);

  app.post("/cupons", CupomController.store);
  app.get("/cupons", CupomController.index);

  app.post("/produtos", ProdutoController.store);
  app.get("/produtos", ProdutoController.index);

  app.post("/produtocategorias", ProdutoCategoriaController.store);
  app.get("/produtocategorias", ProdutoCategoriaController.index);
};
