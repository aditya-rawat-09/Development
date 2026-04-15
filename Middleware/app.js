const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  const startedAt = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startedAt;
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });

  next();
});

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token !== "Bearer secret") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

app.get("/", (req, res) => {
  res.json({ message: "Middleware app is running" });
});

app.get("/profile", checkAuth, (req, res) => {
  res.json({ message: "Welcome to your profile" });
});

app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  res.status(201).json({ message: `User ${name} created` });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
