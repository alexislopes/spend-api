const express = require("express");
const UserController = require("./controllers/UserController");
const CategoriaController = require("./controllers/CategoriaController");
const CupomController = require("./controllers/CupomController");
const ProdutoController = require("./controllers/ProdutoController");
const ProdutoCategoriaController = require("./controllers/ProdutoCategoriaController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Eai");
});

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.post("/categorias", CategoriaController.store);
routes.get("/categorias", CategoriaController.index);

routes.post("/cupons", CupomController.store);
routes.get("/cupons", CupomController.index);

routes.post("/produtos", ProdutoController.store);
routes.get("/produtos", ProdutoController.index);

routes.post("/produtocategorias", ProdutoCategoriaController.store);
routes.get("/produtocategorias", ProdutoCategoriaController.index);

module.exports = routes;
