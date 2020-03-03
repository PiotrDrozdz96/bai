// boki trójkąta
a = 3;
b = 4;
c = 5;
// h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

const heron = () => {
  const s = (a + b + c) / 2;
  
  return Math.sqrt( s * (s - a) * (s - b) * (s - c) );
}

console.log(`Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${heron()}.`);
