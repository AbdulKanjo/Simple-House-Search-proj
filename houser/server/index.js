require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const massive = require("massive");
const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(e => console.log(e));

app.use(express.static(`${__dirname}/../build`));

app.get("/api/houses", controller.getAll);
app.post("/api/houses", controller.create);
app.delete("/api/house/:id", controller.deleteHouse);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening ${port}`);
});
