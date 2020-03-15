const connect = () => {
  const method = 'GET';
  const URL = '/04-JSON&DataTransfer/assets/student.json'
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = display;
  xhr.open(method, URL);
  xhr.send();
};

function display(){
  const { readyState, status, response } = this;

  if(readyState === 4 && status === 200) {
    const student = JSON.parse(response);

    document.getElementById('personalData').innerHTML = `
      ${Object.keys(student).map((key) => (
        `<div>${key}: ${student[key]}</div>`
      )).join('')}
    `;
  }
}
