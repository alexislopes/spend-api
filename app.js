const express = require("express");
const app = express();

require("./database");

app.use(express.json());
// app.use(routes);

const PORT = 3333 | process.env.PORT;

require("./routes")(app);

app.listen(PORT, async () => {
  console.log(`App is running on port ${PORT}`);
});
