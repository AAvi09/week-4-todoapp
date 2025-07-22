const express = require("express");

function calculateSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}
const app = express();
app.get("/", (req, res) => {
  const n = parseInt(req.query.n);
  if (isNaN(n)) {
    res.status(400).send("Invalid number");
  } else {
    const sum = calculateSum(n);
    res.send(`The sum of numbers from 1 to ${n} is ${sum}`);
  }
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
