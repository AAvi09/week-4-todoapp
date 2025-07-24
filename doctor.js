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
app.use(express.json());

app.get("/", (req, res) => {
  const patientName = req.query.name;
  const Kidney = users.find((user) => user.name === patientName).kidneys;
  const numberOfKidneys = Kidney.length;
  const healthyKidneys = Kidney.filter((kidney) => kidney.healthy);
  const unhealthyKidneys = Kidney.filter((kidney) => !kidney.healthy);
  res.json({
    patientName: patientName,
    numberOfKidneys,
    healthyKidneys: healthyKidneys.length,
    unhealthyKidneys: unhealthyKidneys.length,
  });
});
app.post("/", (req, res) => {
  console.log(req.body);
  console.log("post hit");
  const isHealthy = req.body.isHealthy;
  const patientName = req.query.name;
  const user = users.find((user) => user.name === patientName);
  if (!user) {
    return res.status(404).send("User not found");
  }
  user.kidneys.push({ healthy: isHealthy });
  res.json({
    message: "Kidney status updated successfully",
    patientName: user.name,
    kidneys: user.kidneys,
  });
});
app.put("/", (req, res) => {
  const patientName = req.query.name;
  const user = users.find((user) => user.name === patientName);
  if (!user) {
    return res.status(404).send("User not found");
  }
  user.kidneys.forEach((kidney) => (kidney.healthy = true));
  res.json({});
});
//remove unhealthy kidneys
app.delete("/", (req, res) => {
  const patientName = req.query.name;
  const user = users.find((user) => user.name === patientName);
  if (!user) {
    return res.status(404).send("User not found");
  }
  user.kidneys = user.kidneys.filter((kidney) => kidney.healthy);
  res.json({
    message: "Unhealthy kidneys removed successfully",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
