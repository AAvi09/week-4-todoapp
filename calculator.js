const express = require("express");
const app = express();
// You have been given an express server which has a few endpoints.

app.use(express.json());
// Your task is to create a global middleware (app.use) which will
function middleware(req, res, next) {
  console.log(
    "Request received at: " +
      new Date().toISOString().replace("T", " ").replace("Z", "")
  );
  console.log("request method: " + req.method);
  console.log("host name : " + req.hostname);
  console.log("request url: " + req.url);
  next();
}
app.use(middleware);

// 1. Log the request method and URL for every request
// 2. Log the time when the request was received
// 3. If the request is a POST request, log the body of the request

app.get("/sum/:a/:b", (req, res) => {
  const a = req.params.a;
  const b = req.params.b;
  const sum = parseInt(a) + parseInt(b);
  res.status(200).json({ sum });
});

app.get("/multiply/:a/:b", (req, res) => {
  const a = req.params.a;
  const b = req.params.b;
  const product = parseInt(a) * parseInt(b);
  res.status(200).json({ product });
});

app.get("/divide/:a/:b", (req, res) => {
  const a = req.params.a;
  const b = req.params.b;
  if (b == 0) {
    return res.json({ error: "cannot divide by zero" });
  }
  const quotient = parseInt(a) / parseInt(b);
  res.status(200).json({ quotient });
});

app.get("/subtract/:a/:b", (req, res) => {
  const a = req.params.a;
  const b = req.params.b;
  const difference = parseInt(a) - parseInt(b);
  res.status(200).json({ difference });
});
// rate limit the requests from a user to only 5 request per second

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
