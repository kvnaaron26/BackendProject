class Usuario {
  constructor(nombre, apellido, mascotas, libros) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mascotas = mascotas;
    this.libros = libros;
  }
  saludar() {
    return `Hola, mi nombre es: ${this.nombre + this.apellido}`;
  }
  getFullName() {
    return this.nombre + this.apellido;
  }
  getBookNames() {
    return this.libros;
  }
}

// *********************************************

const user1 = new Usuario(
  "Kevin ",
  "Elgueta",
  ["Perro", "Conejo"],
  [{ titulo: "Harry Poter", autor: "J.K.Rowling" }]
);

const user2 = new Usuario(
  "Brandon ",
  "Moreno",
  ["Oso", "Tigre"],
  [{ titulo: "Amnesia", autor: "Jose Jose" }]
);

// *********************************************

// *********************************************

let mascotas = [];

const addPet = (mascota) => mascotas.push(mascota);

addPet("gato");
addPet("pez");
addPet("hamster");

const countPets = () => {
  return `Tienes ${mascotas.length} mascotas ingresadas.`;
};

// *********************************************

console.log(user1.saludar());
console.log(countPets());
console.log(user2.getBookNames());
