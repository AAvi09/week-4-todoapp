const express = require("express");
const app = express();

const users = [
  {
    name: "suresh",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const sureshKidney = users.find((user) => user.name === "suresh").kidneys;
  const healthyKidneys = sureshKidney.filter((kidney) => kidney.healthy);
  res.send(`Suresh has ${healthyKidneys.length} healthy kidneys.`);
});
app.post("/", (req, res) => {});
app.put("/", (req, res) => {});
app.delete("/", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
