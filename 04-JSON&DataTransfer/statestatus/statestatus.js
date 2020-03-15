const connect = () => {
  const method = 'GET';
  const URL = 'http://api.nbp.pl/api/cenyzlota/last/30/?format=json';
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = display;
  xhr.open(method, URL);
  xhr.send();
};

function display(){
  const { readyState, status, response } = this;

  if(readyState === 4 && status === 200) {
    console.log(response);
  }
}
