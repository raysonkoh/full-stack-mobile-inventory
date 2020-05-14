const express = require("express");
const mongoose = require("mongoose");
const { secret, mongoURI } = require("./configs");
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 3000;
const authRoutes = require("./routes/authRoutes");

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("Successfully connected to mongoDB!"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    msg: "Hello world!!!!!",
  });
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}!`));
