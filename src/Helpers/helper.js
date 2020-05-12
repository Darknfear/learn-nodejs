const brcypt = require("bcryptjs");
const config = require("config");
const hashRound = config.get("saltRounds");

const hashPass = pass => {
  return new Promise((resolve, reject) => {
    brcypt.hash(pass, hashRound, (err, result) => {
      if(err) reject(err);
      else resolve(result);
    })
  })
};
const comparePass = (pass, hash) => {
  return new Promise((resolve, reject) => {
    brcypt.compare(pass, hash, (err, result) => {
      if(err) reject(err);
      else resolve(resolve);
    })
  });
};

module.exports = {
  hashPass,
  comparePass
}
