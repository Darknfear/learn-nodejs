const db = require("../common/database");
const connection = db.connection;
const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    const stringQuery = "SELECT * FROM bai_posts";
    connection.query(stringQuery, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
const addPost = (post) => {
  return new Promise((resolve, reject) => {
    const stringQuery = "INSERT INTO bai_posts SET ?";
    connection.query(stringQuery, post, (err, result) => {
      if (err) reject(err);
      else resolve(resolve);
    });
  });
};
const getPostById = (id) => {
  return new Promise((resolve, reject) => {
    const stringQuery = "SELECT * FROM bai_posts WHERE id = ?";
    connection.query(stringQuery, id, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
const updatePostWithData = (data) => {
  const {title, content, author, id} = data;
  return new Promise((resolve, reject) => {
    const stringQuery = "UPDATE bai_posts SET title = ?, content = ?, author = ?, updated_at = ? WHERE id = ?";
    connection.query(stringQuery, [title, content, author, new Date(), id], (err, result) => {
      if(err) reject(err);
      else resolve(result);
    }); 
  });
}
const deletePostById = (ID) => {
  console.log("id",ID)
  return new Promise((resolve, reject) => {
    const stringQuery = "DELETE FROM bai_posts WHERE id = ?";
    connection.query(stringQuery, ID, (err, result) => {
      if(err) {
        reject(err);
      }
      else resolve(result);
    })
  });
}
module.exports = {
  getAllPosts,
  addPost,
  getPostById,
  updatePostWithData,
  deletePostById,
};
