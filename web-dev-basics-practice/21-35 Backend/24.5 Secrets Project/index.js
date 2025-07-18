//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var UserIsAuthorized = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
  var password = req.body["password"];
  if (password === ILoveProgramming) {
    UserIsAuthorized = true;
  }
  next();
}
app.use(passwordCheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (UserIsAuthorized) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});
