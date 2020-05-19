"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("produtos", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
      },
      data: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ncm: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      quantidade: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      valor_unitario: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      valor: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      total_item: {
        type: Sequelize.REAL,
        allowNull: true,
      },
      fk_cupom: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "cupons", key: "id" },
        onUpdate: "CASCADE",
        oDelete: "CASCADE",
      },
      fk_categoria: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "categorias", key: "id" },
        onUpdate: "CASCADE",
        oDelete: "CASCADE",
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("produtos");
  },
};
