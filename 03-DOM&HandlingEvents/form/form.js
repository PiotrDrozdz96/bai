const university = 'Cracow University of Economics';
const address = 'Rakowicka 27, Krakow, POLAND';

const universityInput = document.querySelector('input[name="university"]');
const addressInput = document.querySelector('input[name="address"]');

const fillForm = () => {
  universityInput.value = university;
  addressInput.value = address;
};
