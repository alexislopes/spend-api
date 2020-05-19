const { Model, DataTypes } = require("sequelize");

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        data: DataTypes.BIGINT,
        codigo: DataTypes.STRING,
        descricao: DataTypes.STRING,
        ncm: DataTypes.STRING,
        quantidade: DataTypes.REAL,
        valor_unitario: DataTypes.REAL,

        fk_cupom: DataTypes.UUID,
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }

  static associate(models) {
    // this.belongsTo(models.Cupom, { foreignKey: "fk_cupom", as: "cupom" });
    this.belongsTo(models.Cupom, { foreignKey: "fk_cupom" });
    this.belongsToMany(models.Categoria, {
      through: "produto_categoria",
      foreignKey: "id_produto",
      as: "categorias",
    });
  }
}

module.exports = Produto;
