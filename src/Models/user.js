const db = require("../common/database");
const connection = db.connection;
const addUser = (user) => {
  return new Promise((resolve, reject) => {
    if (user) {
      let stringQuery = "INSERT INTO users SET ?";
      connection.query(stringQuery, user, (err,result) => {
        if(err)  reject(err);
        else  resolve(result);
      });
    }
  });
};

const checkUser = email => {
  return new Promise((resolve, reject) => {
    const stringQuery = "SELECT * FROM users WHERE email = ?";
    connection.query(stringQuery,email, (err, result) => {
      if(err) reject(err);
      else resolve(result);
    })
  })
}
module.exports = {
  addUser,
  checkUser
}
