const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());
app.get("/file/:filename", (req, res) => {
  const filename = req.params.filename;
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
