const keys = require("./keys");

module.exports = {
  dialect: keys.DIALECT,
  host: keys.HOST,
  username: keys.USERNAME,
  password: keys.PASSWORD,
  database: keys.DATABASE,
  define: {
    underscored: true,
    timestamps: false,
  },
  ssl: true,
  dialectOptions: {
    ssl: true,
  },
};
