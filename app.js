const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.originalUrl} ${req.headers['user-agent']}`);
  next();
});

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
