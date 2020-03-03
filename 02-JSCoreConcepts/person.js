class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  get fullName() { return `${this.name} ${this.surname}`}
  get initials() { return `${this.name[0]}.${this.surname[0]}`}
}

const janNowak = new Person('Jan', 'Nowak');
const piotrDrozdz = new Person('Piotr', 'Drożdż');

console.log(janNowak.fullName);
console.log(janNowak.initials);
console.log(piotrDrozdz.fullName);
console.log(piotrDrozdz.initials);
