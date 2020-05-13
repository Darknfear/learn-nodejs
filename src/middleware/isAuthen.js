const checkLogin = (req, res, next) => {
    if(req.session.user) next();
    else res.redirect("/SignIn");
};
module.exports = {
    checkLogin,
}