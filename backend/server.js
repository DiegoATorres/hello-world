const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// --------------------
// Static frontend
// --------------------
app.use(express.static(path.join(__dirname, "../frontend")));

// --------------------
// API routes
// --------------------
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/time", (req, res) => {
  res.json({
    now: new Date().toISOString(),
    unix: Date.now(),
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    name: "hello-world",
    version: "1.0.0",
    endpoints: ["/", "/health", "/api/time", "/api/info"],
  });
});

// --------------------
// 404 API fallback
// --------------------
app.use("/api", (req, res) => {
  res.status(404).json({ error: "Not found", path: req.originalUrl });
});

// --------------------
// Server start
// --------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});