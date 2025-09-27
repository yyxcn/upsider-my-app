const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const os = require("os");
  const serverHost = os.hostname();

  res.json({
    serverHost,
    time: new Date().toISOString()
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT} or http://localhost:${PORT}`);
});
