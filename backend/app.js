const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const bodyParser = require("body-parser");
require("dotenv").config();

const eventRouter = require("./routes/api/events");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/events", eventRouter);
app.get("/", (req, res) => {
  res.json("Hello from backend");
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
