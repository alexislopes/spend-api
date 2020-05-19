const { Model, DataTypes } = require("sequelize");

class Categoria extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: DataTypes.STRING,
      },

      { sequelize, tableName: "categorias", timestamps: false }
    );
  }

  static associate(models) {
    // this.hasMany(models.Produto, { foreignKey: "id", as: "produtos" });

    this.belongsToMany(models.Produto, {
      through: "produto_categoria",
      foreignKey: "id_categoria",
    });
  }
}

module.exports = Categoria;
