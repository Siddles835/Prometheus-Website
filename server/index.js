import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "prometheus-website",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/site", (_req, res) => {
  res.json({
    name: "Prometheus",
    contact: "prometheuscompsci@gmail.com",
    registerUrl: "https://tinyurl.com/aug-speed",
    internshipUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfGwChpnERV5JcENuYXM2FbrT7XAHjSM11lCSkpnNKAlZbN3g/viewform?usp=dialog",
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(distDir));
  app.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") {
      next();
      return;
    }
    res.sendFile(path.join(distDir, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Prometheus server listening on http://localhost:${PORT}`);
});
