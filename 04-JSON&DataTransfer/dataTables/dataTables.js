$(document).ready(function() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = display;
  xhr.open('GET', 'http://api.nbp.pl/api/exchangerates/tables/A/?format=json');
  xhr.send();

  function display(){
    const { readyState, status, response } = this;

    if(readyState === 4 && status === 200) {
      const [{ rates: data }] = JSON.parse(response);
      const columns = Object.keys(data[0]).map((key) => {
        const [firstCharacter, ...restCharacters] = key;
        const title = [firstCharacter.toUpperCase(), ...restCharacters].join('');
        
        return { data: key, title };
      });

      $('#myTable').DataTable({ data, columns });
    }
  }
});
