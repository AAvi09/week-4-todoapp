const express = require("express");
const app = express();

const isOldEnoughMiddleware = (req, res, next) => {
  const age = parseInt(req.query.age);
  if (age >= 14) {
    next();
  } else {
    res.status(411).json({
      msg: "you are not old enough to ride ",
    });
  }
};

app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "you have successfully riden the ride2",
  });
});

app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "you have successfully riden the ride1",
  });
});

app.get("/ride3", isOldEnoughMiddleware, (req, res) => {
  res.json({ msg: "you have successfully riden the ride3" });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
