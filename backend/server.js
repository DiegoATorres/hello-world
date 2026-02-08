const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Simple health endpoint
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    return res.end(JSON.stringify({ status: "ok" }));
  }

  // Serve index.html for everything else
  const filePath = path.join(__dirname, "..", "frontend", "index.html");

  fs.readFile(filePath, "utf8", (err, html) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Server error: cannot read index.html");
    }

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

