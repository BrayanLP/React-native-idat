// Ejercicio #5
// Hola, objeto
// Escribe el código, una línea para cada acción:
// 1. Crea un objeto vacío user.
// 2. Añade la propiedad name con el valor John.
// 3. Añade la propiedad surname con el valor Smith.
// 4. Cambiar el valor del name por Pete.
// 5. Quitar la propiedad name del objeto.

let user = {};
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name
console.log(user)
