const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const port = 8080;

app.use(cors());
app.use(express.json());
app.get("/api/hello", (req, res) => {
  res.json({ message: "salam aleikum world" });
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
