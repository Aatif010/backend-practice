const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/login", (req, res) => {
  res.send("login now");
});
app.get("/welcome", (req, res) => {
  res.send("welcome");
});
app.listen(process.env.PORT, () => {
  console.log("server running");
});
