const fs = require("fs");

const express = require("express");
const app = express();
app.use(express.json());
app.get("/files/:filename", (req, res) => {
  const path = require("path");
  const filename = path.join(__dirname, req.params.filename);
  console.log("Trying to read file:", filename); // 👈 Debug
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err); // 👈 Debug
      res.status(500).send("Error reading file");
    } else {
      console.log("File read successfully:", data); // 👈 Debug
      res.json({
        data,
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
