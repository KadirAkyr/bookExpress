// Mettre les URL, localhost port...
var config = {};

config.https = {
  keyPath: "....",
  certPath: "....",
};

// cors whitlisted urls in prod and dev env
config.cors = {
  whitelist: {
    local: [],
    prod: [],
  },
};

// database uris for prod and dev env
config.mongoURI = {
  local: "mongodb://localhost:27017/books-db",
  prod: "",
};

// rate limiting
config.rateLimit = {
  local: "..",
  prod: "....",
};

module.exports = config;
