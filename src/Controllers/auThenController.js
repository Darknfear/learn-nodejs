const {addUser, checkUser} = require("../Models/user");
const {comparePass, hashPass} = require("../Helpers/helper");

const register = (req, res) => {
  res.render("signup");
};
const signIn = (req, res) => {
  res.render("signin")
};

const signUpPost = async (req, res) => {
  const {email, password, firstname, lastname, retype} = req.body;
  try {
    const passHash = await hashPass(password.trim())
    const user = {
      email,
      password: passHash,
      frist_name: firstname,
      last_name: lastname,
    };
    const result = await addUser(user);
    if(result) res.redirect("signin");
    else res.send("dang ki that bai")
  } catch (error) {
    console.log("err ", error)
  }
}

const signInPost = async (req, res) => {
  const {email, password} = req.body;
  try {
    const arrItem = await checkUser(email);
    const [item] = arrItem;
    if(item) {
      const result = await comparePass(password, item.password);
      if(result) {
        req.session.user = item;
        console.log("session: ",req.session.user)
        return res.send("login thanh cong")
      }
      else return res.send("sai ten dang nhap hoac mat khau");
    } else return res.status(404).send("not found");
  } catch (error) {
    console.log("err: ", error)
    return res.send("loi dang nhap")
  }
}

module.exports = {
  register,
  signIn,
  signUpPost,
  signInPost,
};
