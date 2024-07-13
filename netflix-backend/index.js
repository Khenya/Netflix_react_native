const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
