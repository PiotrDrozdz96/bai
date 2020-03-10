const input = document.querySelector('input[name="item"]');
const list = document.getElementById('shoppingList');

const addItemToList = () => {
  const item = document.createElement('li');
  item.innerHTML = input.value;
  input.value = '';
  list.appendChild(item);
};
