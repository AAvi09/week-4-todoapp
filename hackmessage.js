const express = require("express");
const app = express();
function messageHandler(req, res) {
  res.send("Ur mobile phone is hacked☠☠☠🙄😂😂🎧🎧🕹⚠⚠⚠🕹⚠⚠💲💲💲💲");
}
app.get("/givemessage", messageHandler);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
