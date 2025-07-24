const express = require("express");
const app = express();

const isOldEnough = (age) => {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
};

const isOldEnoughMiddleware = (req, res, age, next) => {
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

app.get("/ride1", (req, res) => {
  res.json({
    msg: "you have successfully riden the ride1",
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
