const timeout = 30000;
const resultElement = document.getElementById('result');

const endTest = (element) => {
  element.blur();
  element.value = '';
  element.onkeypress = () => typingTest(element);
};

const showResult = (value) => {
  resultElement.innerHTML = `
  words: ${value.split(' ').length}
  characters: ${value.length}
  `;
};

const typingTest = (element) => {
  element.onkeypress = '';
  setTimeout(() => {
    showResult(element.value);
    endTest(element);
  }, timeout);
};
