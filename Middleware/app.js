const express = require("express");
const expressError = require("./expresserror");
const e = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());


const checkAuth = (req, res, next) => {
  const token = req.query.token;

  if (token !== "secret") {
   throw new expressError(401, "Access denied");
  }

  next();
};

app.get("/", (req, res) => {
 res.send("Hello, World!");
});

app.get("/api", checkAuth, (req, res) => {
  res.send("Welcome to the API!");
});

app.get("/error",(req, res) => {
  abcd=abcd;
});

app.use((err, req, res, next) => {
  let{ status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});





// app.use((req, res) => {
//   res.status(404).json({ message: "Route not found" });
// });

// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ message: "Something went wrong" });
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
