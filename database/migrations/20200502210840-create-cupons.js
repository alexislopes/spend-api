"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("cupons", {
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
      emitente: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      chave: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("cupons");
  },
};
