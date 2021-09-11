// Claves iterables
// Nos gustaría obtener un arreglo de map.keys () en una variable y luego aplicarle métodos específicos
// de la matriz, p. Ej. .push(). Pero eso no funciona:
// let map = new Map();map.set("name", "John")let keys = map.keys();// Error: keys.push is not a
// functionkeys.push("more");
// ¿Por qué? ¿Cómo podemos arreglar el código para que funcione keys.push?


let map = new Map();
map.set("name", "John")
let keys = map.keys();// Error: keys.push is not a
// functionkeys.push("more");
console.log(keys);