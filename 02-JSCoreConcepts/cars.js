const isCar = (car1, car2, car3) => [car1, car2, car3].findIndex((car) => car !== car1) === -1;

console.log(isCar(true, true, true));
console.log(isCar(false, false, false));
console.log(isCar(true, true, false));
console.log(isCar(false, false, true));
console.log(isCar(true, false, true));
