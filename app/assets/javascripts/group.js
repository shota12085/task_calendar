$(function() {
  function addDeleteUser(name, id) {
    let html = `
    <div class="group-user__list" id="${id}">
      <p class="group-user__name">${name}</p>
      <div class="group-user__btn--remove" data-user-id="${id}" data-user-name="${name}">削除</div>
    </div>`;
    $(".js-add-user").append(html);
  }
  function addMember(userId) {
    let html = `<input value="${userId}" name="group[user_ids][]" type="hidden" id="group_user_ids_${userId}" />`;
    $(`#${userId}`).append(html);
    // console.log(html);
  }
  
  $(document).on("click", ".group-user__btn--add", function() {
    const userName = $(this).attr("data-user-name");
    const userId = $(this).attr("data-user-id");
    $(this)
      .parent()
      .remove();
    addDeleteUser(userName, userId);
    addMember(userId);
  });
  $(document).on("click", ".group-user__btn--remove", function() {
    $(this)
      .parent()
      .remove();
  });
});