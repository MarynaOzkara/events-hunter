const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();
app.listen(PORT, () => {
  console.log(`Server starts on PORT ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend!" });
});
