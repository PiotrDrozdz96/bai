const showTitle = (element) => {
  element.onclick = '';
  element.innerHTML += 'in the Wall';
};

const showDescription = (element) => {
  element.onclick = '';
  const description = document.getElementById('description');
  description.style = '';
};

const makeItalic = (element) => {
  element.onclick = '';
  element.style = 'font-style: italic;';
};

const changeBackgroundColor = (element, color) => {
  ondbclick = '';
  element.style = `background-color: ${color};`;
};

const openCopyWarning = () => {
  window.alert('Copyright');
};

const addImg = (element) => {
  const img = document.createElement('img');
  img.src = 'https://upload.wikimedia.org/wikipedia/en/d/d6/Pink_Floyd_-_all_members.jpg';
  element.appendChild(img);
};
