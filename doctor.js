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

app.get("/", (req, res) => {});
app.post("/", (req, res) => {});
app.put("/", (req, res) => {});
app.delete("/", (req, res) => {});
