const { Model, DataTypes } = require("sequelize");

class ProdutoCategoria extends Model {
  static init(sequelize) {
    super.init(
      {
        id_produto: { type: DataTypes.UUID, primaryKey: true },
        id_categoria: { type: DataTypes.UUID, primaryKey: true },
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }
}

module.exports = ProdutoCategoria;
