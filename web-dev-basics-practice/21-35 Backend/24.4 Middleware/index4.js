import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var a = "";
app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  a = req.body["street"] + req.body["pet"];
  console.log(req.body);
  next();
}
app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.send(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
  res.send(`<h1>your band name is:</h1> <h2>${a}✌️</h2>`);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
