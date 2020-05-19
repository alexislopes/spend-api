const User = require("../../models/User");

module.exports = {
  async store(req, res) {
    const { name, email } = req.body;
    console.log("name: ", name);

    const user = await User.create({ name, email });

    return res.json(user);
  },

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }
};
