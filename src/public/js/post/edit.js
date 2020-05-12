let btnEdit = document.getElementById("put_edit");
let inputTitle = document.getElementById("title");
let inputContent = document.getElementById("content");
let inputAuthor = document.getElementById("author"); 
let inputID = document.getElementById("id");

btnEdit.addEventListener("click", () => {
  const data = {
    id: inputID.value,
    title: inputTitle.value,
    content: inputContent.value,
    author: inputAuthor.value,
  };
  const base_url = location.protocol + "//" + document.domain + ":" + location.port;
  console.log("url: ", base_url)
  $.ajax({
    url: base_url + "/admin/post/edit",
    method: "PUT",
    data: data,
    dataType: "json",
    success: (res) => {
      if(res&&res.status === 200) {
        location.reload();
      };
    },
  });
});