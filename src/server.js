const express = require("express");
const routes = require("./routes");
const app = express();

require("./database");

app.use(express.json());
app.use(routes);

const PORT = 3333 | process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
