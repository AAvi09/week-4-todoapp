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
  {
    name: "ramesh",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: true,
      },
    ],
  },
  {
    name: "mahesh",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const patientName = req.query.name;
  const Kidney = users.find((user) => user.name === patientName).kidneys;
  const numberOfKidneys = Kidney.length;
  const healthyKidneys = Kidney.filter((kidney) => kidney.healthy);
  const unhealthyKidneys = Kidney.filter((kidney) => !kidney.healthy);
  res.json({
    userName: userName,
    numberOfKidneys,
    healthyKidneys: healthyKidneys.length,
    unhealthyKidneys: unhealthyKidneys.length,
  });
});
app.post("/", (req, res) => {});
app.put("/", (req, res) => {});
app.delete("/", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
