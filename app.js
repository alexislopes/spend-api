const express = require("express");
const bodyParser = require("body-parser");

require("./database");

const PORT = 3333 | process.env.PORT;
const app = express();

app.use(bodyParser.json());
// app.use(express.json());
// app.use(routes);

require("./routes")(app);

app.listen(PORT, async () => {
  console.log(`App is running on port ${PORT}`);
});
