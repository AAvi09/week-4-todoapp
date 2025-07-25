const exxpress = require("express");
const app = exxpress();

let requestCount = 0;
app.use((req, res, next) => {
  requestCount++;
  console.log(`Request count: ${requestCount}`);
  next();
});

app.get("/user", (req, res) => {
  res.status(200).json({ name: "shreetopachand" });
});

app.post("/user", (req, res) => {
  res.status(200).json({ msg: "user just the post request" });
});
app.get("/requestcount", (req, res) => {
  res.status(200).json({ requestCount });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
