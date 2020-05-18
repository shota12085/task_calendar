$(function() {
  function addDeleteUser(name, id, image) {
    let html = `
    <div class="group-user__list" id="${id}">
      <p class="group-user__name">${name}</p>
      <div class="group-user__btn--remove" data-user-id="${id}" data-user-name="${name}" data-user-imageicon="${image}">削除</div>
    </div>`;
    $(".js-add-user").append(html);
  }
  function addMember(userId) {
    let html = `<input value="${userId}" name="group[user_ids][]" type="hidden" id="group_user_ids_${userId}" />`;
    $(`#${userId}`).append(html);
  }
  function addFriendList(name,id,image){
    let html =
    `<div class = "group-user" "data-user-id" = "${id}", "data-user-name" = "${name}", "data-user-imageicon" = "${image}">
        <img src = ${image} class = "group-user__image">
      <p class = "group-user__name">
        ${name}
      </p>
      <div class = "group-user__btn--add" "data-user-id" = "${id}", "data-user-name" = "${name}", "data-user-imageicon" = "${image}" >追加</div>
    </div>
    </div>`
    $("#group-users").append(html); 
  }
  function addNoFriendList(name,id,image){
    let html =
    `<div class = "group-user" "data-user-id" = "${id}", "data-user-name" = "${name}", "data-user-imageicon" = "${image}">
      <img src = "/images/default.jpg" class = "group-user__image">
      <p class = "group-user__name">
        ${name}
      </p>
      <div class = "group-user__btn--add" "data-user-id" = "${id}", "data-user-name" = "${name}", "data-user-imageicon" = "${image}" >追加</div>
    </div>
    </div>`
    $("#group-users").append(html);
    
  }
  
  $(document).on("click", ".group-user__btn--add", function() {
    const userName = $(this).attr("data-user-name");
    const userId = $(this).attr("data-user-id");
    const userImage = $(this).attr("data-user-imageicon");
    $(this)
    .parent()
    .remove();
    addDeleteUser(userName, userId, userImage);
    addMember(userId);
  });
  $(document).on("click", ".group-user__btn--remove", function() {
    const userName = $(this).attr("data-user-name");
    const userId = $(this).attr("data-user-id");
    const userImage = $(this).attr("data-user-imageicon");
    console.log(userId);
    $(this)
      .parent()
      .remove();
        if (userImage){
          addFriendList(userName,userId,userImage);
        }else{
          addNoFriendList(userName,userId,userImage);
        }
  });
});