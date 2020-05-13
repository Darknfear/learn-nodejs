var linkUser = document.getElementById("link-user");
var linkBlog = document.getElementById("link-blog");
var linkPost = document.getElementById("link-post")
linkUser.addEventListener("click", function() {
  linkUser.classList.add("selected");
  linkPost.classList.remove("selected");
});

linkPost.addEventListener("click", function(){
  linkUser.classList.remove("selected");
  linkPost.classList.add("selected");
});

linkBlog.addEventListener("click", function() {
  linkUser.classList.remove("selected");
  linkPost.classList.add("selected");
});
