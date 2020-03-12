$(document).ready(function() {
  const $input = $('input[name="item"]');
  const $list = $('#shoppingList');

  $('#addButton').on('click', function() {
    const $item = $(`<li>${$input.val()}</li>`);

    $list.append($item);
    $input.val('');
  });

  $list.on('dblclick', 'li', function() {
    this.remove();
  });
});
