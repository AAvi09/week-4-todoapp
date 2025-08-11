const express = require("express");

const app = express();

function signInHandler(req, res, next) {}

function signUpHandler(req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required",
    });
  }
}

app.post("/signup", signUpHandler);

app.post("signin", signInHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
