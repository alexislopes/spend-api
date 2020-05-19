const { Model, DataTypes } = require("sequelize");

class Cupom extends Model {
  static init(sequelize) {
    super.init(
      {
        data: DataTypes.BIGINT,
        emitente: DataTypes.STRING,
        chave: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "cupons",
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Produto, { foreignKey: "id", as: "produtos" });
  }
}

module.exports = Cupom;
