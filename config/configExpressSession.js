const session = require("express-session");
const config = require("config");
const configSession = (app) => {
  app.set("trust proxy", 1); // trust first proxy
  app.use(
    session({
      secret: config.get("secret_key"),
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
  );
};

module.exports = {
  configSession
};
