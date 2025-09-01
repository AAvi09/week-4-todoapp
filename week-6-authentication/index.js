const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const users = [];
const JWT_SECRET = "user-app";

function tokengeneration() {
  // This function should generate a token for the user
  const options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let token = "";
  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * options.length);
    token += options[randomIndex];
  }
  return token;
}

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({ username: username, password: password });
  console.log(users);

  res.json({
    message: "you are signed in successfully",
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).json({
      error: "Username and password are required",
    });
  }
  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );
  if (foundUser) {
    const token = jwt.sign({ username: foundUser.username }, JWT_SECRET);
    foundUser.token = token; // Store the token in the user object
    return res.status(200).json({
      message: "User signed in successfully",
      token: token,
    });
  } else {
    return res.status(400).json({
      error: "User already exists",
    });
  }

  console.log(users);
});

function auth(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    return res.status(401).json({
      error: "user not authenticated",
    });
  }
  const decodedInfo = jwt.verify(token, JWT_SECRET);
  if (decodedInfo.username) {
    req.username = decodedInfo.username;
    next();
  } else {
    res.status(401).json({
      error: "user is not authenticated",
    });
  }
}

app.get("/me", auth, function (req, res) {
  let foundUser = users.find((user) => user.username === req.username);
  if (username) {
    return res.status(200).json({
      username: foundUser.username,
      password: foundUser.password,
    });
  }
  return res.status(401).json({
    error: "user is not authenticated",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
