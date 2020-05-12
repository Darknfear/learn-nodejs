const mysql = require("mysql");
const config = require("config");

const connection = mysql.createConnection({
  host: config.get("mysql.host"),
  user: config.get("mysql.user"),
  password: config.get("mysql.password"),
  database: config.get("mysql.database"),
  port: config.get("mysql.port"),
});
connection.connect((err) => {
  if (err) throw err;
  console.log("connected !");
});

module.exports = {
    connection,
};
