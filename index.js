const express = require("express");
const app = express();
const mongoose = require("mongoose");

// DATABASE CONNECTION
mongoose.connect(
  "mongodb+srv://raed:z4WKYkFsQG3pH2TJ@cluster0.lfyij.mongodb.net/Cluster0?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("connected", () => {
  console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
  console.log("DB connection failed with - ", err);
});
// IMPORT ROUTERS
const todoRoutes = require("./routes/todo.routes");
// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ROUTER MIDDLEWARE
app.use("/todos", todoRoutes);

// SERVER LISTENING
const port = 8000;
app.listen(port, () => {
  console.log("this server yemchi 3al port" + port);
});
