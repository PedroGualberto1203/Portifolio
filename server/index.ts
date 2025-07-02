import express, { type Request, Response, NextFunction } from "express";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the root directory
app.use(express.static(path.join(process.cwd())));

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ error: message });
});

const port = 5000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Portfolio server running on port ${port}`);
});
