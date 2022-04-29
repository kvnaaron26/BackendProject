class Usuario {
  constructor(nombre, apellido, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mascotas = mascotas;
  }
  saludar() {
    return `Hola, mi nombre es: ${this.nombre + this.apellido}`;
  }
  getFullName() {
    return this.nombre + this.apellido;
  }
}
const user1 = new Usuario("Kevin ", "Elgueta", "Perro");

console.log(user1.saludar());

// *********************************************

class Libro extends Usuario {
  constructor(nombre, apellido, mascotas, libro, autor) {
    super(nombre, apellido, mascotas);
    this.libro = libro;
    this.autor = autor;
  }
  getBookNames() {
    return `Los libros son : ${this.libro} de ${this.autor}`;
  }
}

user2 = new Libro("Jessica ", "Alba", "Gato", "Guerra y paz", "Leon Tolstoi");

// *********************************************
let mascotas = [];

const addMascota = (mascota) => mascotas.push(mascota);

addMascota("gato");
addMascota("conejo");
addMascota("pez");

const countMascotas = () => {
  return `Tienes ${mascotas.length} mascotas ingresadas.`;
};

// *********************************************

let libros = [];

const addLibro = (libro, autor) => libros.push(libro, autor);

addLibro("Lord of the rings", "Jacob G.");

const countBooks = () => {
  return `Tienes ${libros.length} libros ingresados.`;
};

console.log(countMascotas());
console.log(countBooks());
console.log(user2.getBookNames());
