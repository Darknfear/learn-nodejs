const {getAllPosts, getPostById} = require("../Models/admin");
const myBlog = async (req, res) => {
  try {
    const result = await getAllPosts();
    if(result.length !== 0) {
      const data = {
        posts: result,
        error: false,
      };
      return res.render("blog/index", {data: data});
    } else return res.render("blog/index", {data: {error: "Could not get post"}});
  } catch (err) {
    return res.render("blog/index", {data: {error: "Could not get post"}})
  }
};

const getPostDetail = async (req, res) => {
  try {
    const id = req.params;
    const result = await getPostById(id);
    if(result.length !== 0) {
      const [item] = result;
      const data = {
        post: item,
        error: false,
      };
      console.log("hello", data.post.title)
      return res.render("blog/post", {data: data});
    } else {
      return res.render("blog/post", {data: {error: "could not get post"}});
    }
  } catch (error) {
    return res.render("blog/post", {data: {error: "could not get post"}});
  }
}

const getAbout = (req, res) => {
  res.render("blog/about");
}

module.exports = {
  myBlog,
  getPostDetail,
  getAbout,
}