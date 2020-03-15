const connect = () => {
  const method = 'GET';
  const URL = '/04-JSON&DataTransfer/assets/people.json'
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = display;
  xhr.open(method, URL);
  xhr.send();
};

const createPersonLi = ({ name, surname, country}) => `
  <li>${name} ${surname.toUpperCase()}, ${country}</li>
`;

function display(){
  const { readyState, status, response } = this;

  if(readyState === 4 && status === 200) {
    const people = JSON.parse(response);
    const ol = document.createElement('ol');

    ol.innerHTML = people.map(createPersonLi).join('');
    document.getElementById('personalData').appendChild(ol);
  }
}
