const express = require("express");
const router = express.Router();
const rootController = require("../Controllers/index");
const {auth, admin} = rootController;
const {register, signIn, signUpPost, signInPost} = auth;
const {adminPage, postNew, getNew, getEditPost, updatePost, deletePost, getlistUser} = admin;
const {myBlog, getPostDetail, getAbout} = require("../Controllers/blogController");

const {checkLogin} = require("../middleware/isAuthen");

const initRoute = app => {
    app.get("/SignUp", register);
    app.get("/SignIn", signIn);
    app.post("/SignUp", signUpPost);
    app.post("/SignIn", signInPost);

    app.get("/blog", myBlog);
    app.get("/blog/post/:id", getPostDetail);
    app.get("/blog/about", getAbout);

    app.use(checkLogin);

    app.get("/admin/post", adminPage);
    app.get("/admin/post/new", getNew);
    app.post("/admin/post/new", postNew);
    app.get("/admin/post/edit/:id", getEditPost);
    app.put("/admin/post/edit", updatePost);
    app.delete("/admin/post/delete", deletePost);
    app.get("/admin/user", getlistUser);

    return app.use("/", router);
};

module.exports = {
    initRoute,
}
