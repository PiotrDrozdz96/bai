const names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
  constructor(names) {
    this.names = names;
  }

  get() { return this.names; }
  getFirst(n) { return this.names.slice(0, n); }
  startWith(letter) { return new Students(this.names.filter((word) => word[0] === letter));}
  sort() { return new Students([...this.names].sort()); }
}

const students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());
