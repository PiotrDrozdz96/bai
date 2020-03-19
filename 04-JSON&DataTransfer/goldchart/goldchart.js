const xhr = new XMLHttpRequest();
xhr.onreadystatechange = display;
xhr.open('GET', 'http://api.nbp.pl/api/cenyzlota/last/10');
xhr.send();

function display(){
  const { readyState, status, response } = this;

  if(readyState === 4 && status === 200) {
    const responseData = JSON.parse(response);
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: responseData.map((element) => element.data),
        datasets: [{
          label: 'cena',
          borderColor: 'green',
          data: responseData.map((element) => element.cena),
        }],
      },
    });
  }
}