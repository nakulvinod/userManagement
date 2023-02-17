const { json } = require("body-parser");
const express = require("express");
const fs = require("fs");
const user = require("./routes/user");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("C:/Users/nakul/dev/node.js/userManagement/files/index.html");
  console.log("request got");
});
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(require("body-parser").json());
app.use(express.static("files"));
app.use(user);
app.listen(port, () => {
  console.log("running\n");
});
