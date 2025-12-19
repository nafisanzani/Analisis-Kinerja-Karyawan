const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server running di http://localhost:3000");
});
