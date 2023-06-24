const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const { db } = require("./db/db");
const routePath = "/api/v1";

require("dotenv").config();

const app = express();

// middleware
app.use(express.json());
app.use(cors({}));

// app.get("/", (req, res) => {
//   res.send("Hello World!!");
// });

//routes
fs.readdir("./routes", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  files.forEach((file) => {
    const routeHandler = require("./routes/" + file);
    app.use(routePath, routeHandler);
  });
});

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log("DB Connection Error: ", err));

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
