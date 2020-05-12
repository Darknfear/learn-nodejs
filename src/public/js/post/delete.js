let btnDelete = document.getElementById("btn-delete");
btnDelete.addEventListener("click",() => {
  const id = btnDelete.getAttribute("post_id");
  const base_url = location.protocol + "//" + document.domain + ":" + location.port;
  $.ajax({
    url: base_url + "/admin/post/delete",
    method: "DELETE",
    data: {
      id: id
    },
    dataType: "json",
    success: function(res){
      console.log("res: ", res)
      if(res&&res.status === 200) {
        location.reload();
      };
    },
  });
});