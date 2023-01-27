const config = require("../config");
const mongoose = require("mongoose");

// const url = config.mongoURI[process.env.NODE_ENV || "prod"];
const url = config.mongoURI.local;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.set("strictQuery", true);

mongoose.connect(url, options);

mongoose.connection.on("connecting", () => {
  console.log("connecting");
});

mongoose.connection.on("error", () => {
  console.log("Connection error");
});

mongoose.connection.on("connected", () => {
  console.log("connection to database successfully established");
});

mongoose.connection.on("disconnected", () => {
  console.log("disconnected");
});

module.exports = mongoose.connection;
