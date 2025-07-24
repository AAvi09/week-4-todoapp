const express = require("express");
const app = express();

const isOldEnough = (age) => {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
};

app.get("/ride1", (req, res) => {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "you have successfully riden the ride1",
    });
  } else {
    res.status(411).json({
      msg: "you are not old enough to ride the ride1",
    });
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
