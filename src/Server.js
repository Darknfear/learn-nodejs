const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("config");
const db = require("../src/common/database");

const initRoutes = require("./routes/web");
const configViewEngine = require("../config/congigViewEngine");
const {configSession} = require("../config/configExpressSession");

const host = config.get("server.host");
const port = config.get("server.port");

//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//init session 
configSession(app);

//config ejs template and static file
configViewEngine(app);

//connect db
db.connection;

//init routes
initRoutes.initRoute(app);

app.listen(port, host, () => {
  console.log(`Welcome you to my server with port ${port} and host ${host}`);
});
