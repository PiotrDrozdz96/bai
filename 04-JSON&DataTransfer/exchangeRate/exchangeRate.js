const xhr = new XMLHttpRequest();
xhr.onreadystatechange = display;
xhr.open('GET', 'http://api.nbp.pl/api/exchangerates/tables/A/?format=json');
xhr.send();


const createRow = (columns, cellTag = 'td') => `
  <tr>${columns.map((column) => `<${cellTag}>${column}</${cellTag}>`).join('')}</tr>
`;

function display(){
  const { readyState, status, response } = this;

  if(readyState === 4 && status === 200) {
    const [{ rates }] = JSON.parse(response);
    const keys = Object.keys(rates[0]);
    const table = document.createElement('table');

    table.innerHTML = `
      ${createRow(keys, 'th')}
      ${rates.map((rate) => (
        createRow(keys.map((key) => rate[key]))
      )).join('')}
    `;

    document.body.appendChild(table);
  }
}
