function remove() { this.remove(); }

$(document).ready(function() {
  const $input = $('input[name="item"]');
  const $list = $('#shoppingList');

  $('#addButton').click(function() {
    const $item = $(`<li>${$input.val()}</li>`);
    $item.dblclick(remove);

    $list.append($item);
    $input.val('');
  });

  $('li').dblclick(remove);

});
