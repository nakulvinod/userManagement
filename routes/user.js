const express = require("express");
const router = express.Router();

const userData = {};
let userID = 1;

router.use("/", (req, res, next) => {
  next();
});
router.post("/users", (req, res) => {
  console.log("POST request to /users");
  console.log(req.body, "post");
  userData[userID] = {
    ...req.body,
    id: userID,
  };
  console.log("user data :" + JSON.stringify(userData));
  res.send(userData[userID]);
  userID++;
  console.log("current users: ", userData + "\n");
});
router.delete("/users/:userID", (req, res, next) => {
  res.status(200).send("successfully deleted");
  console.log(`${JSON.stringify(userData[req.params.userID])} was deleted`);

  delete userData[req.params.userID];
  console.log("current users: ", userData + "\n");

  next();
});
router.get("/users", (req, res) => {
  res.status(200).send({
    users: Object.values(userData),
  });
  console.log("All user details were requested", userData, "\n");
});

router.get("/users/:userId", (req, res) => {
  d = Object.values(req.params.userId);
  console.log(userData[d], " was requested.\n");

  res.body = userData[d];

  res.send(res.body);
});
router.put("/users/:userID", (req, res, next) => {
  oldDetails = userData[req.params.userID];
  userData[req.params.userID] = req.body;
  console.log(userData[req.params.userID], " was changed to ", req.body);
  console.log("current users: ", userData);
  res.status(200).send(userData[req.params.userID]);
  next();
});
module.exports = router;
