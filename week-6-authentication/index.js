const express = require("express");

const app = express();
app.use(express.json());

const users = [];

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

  users.push({ username, password });

  if (!username || !password) {
    return res.status(400).json({
      error: "Username and password are required",
    });
  }
  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );
  if (foundUser) {
    const token = tokengeneration();
    return res.status(200).json({
      message: "User signed up successfully",
      token: token,
    });
  } else {
    return res.status(400).json({
      error: "User already exists",
    });
  }

  res.json({
    message: "User signed up successfully",
  });
});

app.post("signin", function (req, res) {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
