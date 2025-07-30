const express = require("express");
const app = express();
// You have been given an express server which has a few endpoints.

app.use(express.json());
// Your task is to create a global middleware (app.use) which will

app.get("/sum/:a/:b", (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  res.status(200).json({ sum });
});

app.get("/multiply/:a/:b", (req, res) => {
  const { a, b } = req.query;
  const product = parseInt(a) * parseInt(b);
  res.status(200).json({ product });
});

app.get("/divide/:a/:b", (req, res) => {
  const { a, b } = req.query;
  if (b == 0) {
    return res.json({ error: "cannot divide by zero" });
  }
  const quotient = parseInt(a) / parseInt(b);
  res.status(200).json({ quotient });
});

app.get("/subtract/:a/:b", (req, res) => {
  const { a, b } = req.query;
  const difference = parseInt(a) - parseInt(b);
  res.status(200).json({ difference });
});
// rate limit the requests from a user to only 5 request per second

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
