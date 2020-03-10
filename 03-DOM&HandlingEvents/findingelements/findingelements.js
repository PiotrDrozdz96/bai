console.log('h1 element');
console.log(document.getElementsByTagName('h1')[0].innerHTML);

console.log('\nElement with id="someText"');
console.log(document.getElementById('someTest').innerHTML);

console.log('\nElement with class important');
console.log(document.getElementsByClassName('important')[0].innerHTML);

console.log('\nAll paragraph elements');
[...document.getElementsByTagName('p')].map(
  (element) => { console.log(element.innerHTML); }
);
