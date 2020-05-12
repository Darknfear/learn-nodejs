const {
  getAllPosts,
  addPost,
  getPostById,
  updatePostWithData,
  deletePostById,
} = require("../Models/admin");
const adminPage = async (req, res) => {
  try {
    const result = await getAllPosts();
    let data = {
      posts: result,
      error: false,
    };
    return res.render("admin/dashboard", { data: data });
  } catch (error) {
    return res.status(500).render("admin/dashboard", {
      data: { error: "get post data is error", posts: null },
    });
  }
};
const getNew = (req, res) => {
  return res.render("admin/post/new", { data: { error: false } });
};
const postNew = async (req, res) => {
  const { title, content, author } = req.body;
  let now = new Date();

  let created_at = now;
  let updated_at = now;
  try {
    const post = {
      title,
      content,
      author,
      created_at,
      updated_at,
    };
    if (title.length === 0 || content.length === 0 || author.length == -0) {
      const data = {
        error: "Please enter full",
      };
      return res.render("admin/post/new", { data: data });
    }

    const result = await addPost(post);
    if (result) {
      return res.redirect("/admin/post");
    }
  } catch (error) {
    const data = {
      error: "Could not insert post",
    };
    return res.render("admin/post/new", { data: data });
  }
};

const getEditPost = async (req, res) => {
  try {
    const params = req.params;
    const id = params.id;
    const result = await getPostById(id);
    const [item] = result;
    if (item) {
      const data = {
        post: item,
        error: false,
      };
      return res.render("admin/post/edit", { data: data });
    } else {
      const data = {
        error: "Could not get Post by ID",
      };
      return res.render("admin/post/edit", { data: data });
    }
  } catch (error) {
    const data = {
      error: "Could not get Post by ID",
    };
    return res.render("admin/post/edit", { data: data });
  }
};

const updatePost = async (req, res) => {
  const params = req.body;
  try {
    const result = await updatePostWithData(params);
    if (result) return res.status(200);
    else return res.status(500);
  } catch (error) {
    return res.status(500);
  }
};

const deletePost = async (req, res) => {
  try {
    const {id} = req.body;
    const result = await deletePostById(id);
    if (result) return res.status(200);
    else return res.status(500);
  } catch (error) {
    return res.status(500);
  }
};

module.exports = {
  adminPage,
  getNew,
  postNew,
  getEditPost,
  updatePost,
  deletePost,
};
