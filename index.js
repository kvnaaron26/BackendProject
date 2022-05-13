// Practica

// const fs = require("fs");

// class Contenedor {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   async save(item) {
//     let data;
//     try {
//       data = await fs.promises.readFile(`./${this.nombre}`);
//       data = JSON.parse(data);
//     } catch (e) {
//       data = [];
//     }
//     const lastItem = data[data.length - 1];
//     let id = 1;

//     if (lastItem) {
//       id = lastItem.id + 1;
//     }
//     item.id = id;
//     data.push(item);
//     return fs.promises.writeFile(
//       `./${this.nombre}`,
//       JSON.stringify(data, null, 2)
//     );
//   }

//   async getById(id) {
//     let data;
//     try {
//       data = await fs.promises.readFile(`./${this.nombre}`);
//       data = JSON.parse(data);
//     } catch (e) {
//       data = [];
//     }
//     return data.find((item) => item.id === id);
//   }

//   async getAll() {
//     let data;
//     try {
//       data = await fs.promises.readFile(`./${this.nombre}`);
//       data = JSON.parse(data);
//     } catch (e) {
//       data = [];
//     }
//     return data;
//   }

//   async deleteById(id) {
//     let data;
//     try {
//       data = await fs.promises.readFile(`./${this.nombre}`);
//       data = JSON.parse(data);
//     } catch (e) {
//       data = [];
//     }

//     const productIndex = data.findIndex((item) => item.id === id);
//     if (productIndex === -1) {
//       return;
//     }

//     data.splice(productIndex, 1);

//     return fs.promises.writeFile(
//       `./${this.nombre}`,
//       JSON.stringify(data, null, 2)
//     );
//   }

//   async deleteAll() {
//     return fs.promises.writeFile(`./${this.nombre}`, "");
//   }
// }

// (async () => {
//   const contenedor = new Contenedor("productos.txt");
//   const newProduct = {
//     title: "Product 1",
//     price: 10.0,
//     thumbnail: "https://image.com",
//   };

//   await contenedor.save(newProduct);

//   const product = await contenedor.getById(1);
//   console.log(product);

//   const products = await contenedor.getAll();
//   console.log(products);

//   await contenedor.deleteById(19);
//   await contenedor.deleteAll();
// })();

// class Usuario {
//   constructor(nombre, apellido, mascotas, libros) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.mascotas = mascotas;
//     this.libros = libros;
//   }
//   saludar() {
//     return `Hola, mi nombre es: ${this.nombre + this.apellido}`;
//   }
//   getFullName() {
//     return this.nombre + this.apellido;
//   }
//   getBookNames() {
//     return this.libros;
//   }
// }

// // *********************************************

// const user1 = new Usuario(
//   "Kevin ",
//   "Elgueta",
//   ["Perro", "Conejo"],
//   [{ titulo: "Harry Poter", autor: "J.K.Rowling" }]
// );

// const user2 = new Usuario(
//   "Brandon ",
//   "Moreno",
//   ["Oso", "Tigre"],
//   [{ titulo: "Amnesia", autor: "Jose Jose" }]
// );

// // *********************************************

// // *********************************************

// let mascotas = [];

// const addPet = (mascota) => mascotas.push(mascota);

// addPet("gato");
// addPet("pez");
// addPet("hamster");

// const countPets = () => {
//   return `Tienes ${mascotas.length} mascotas ingresadas.`;
// };

// // *********************************************

// console.log(user1.saludar());
// console.log(countPets());
// console.log(user2.getBookNames());
