var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76
}

let people = [sacha, alan, martin, dario, vicky, paula];

for (let i = 0; i < people.length; i++) {
  console.log(`${people[i].nombre} mide ${people[i].altura}`)
}


// Filtering
const small = people.filter(p => p.altura < 1.8);
// console.log(small);

// Transform arrays
const transform = people => ({
  ...people,
  altura: people.altura * 100
});

const withCms = people.map(transform)
// console.log(withCms)

const totalBooks = people.reduce((acum, people) => {
  return acum + people.altura
}, 0);
console.log("Total Books: ", totalBooks)