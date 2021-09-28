// Ejercicio #5
// Llamar a async desde no async

// We have a “regular” function called f. How can you call the async function wait() and use its result inside of f?
// async function wait() {
// await new Promise(resolve => setTimeout(resolve, 1000)); return 10;
// }function f() {
// // ... ¿qué deberías escribir aquí? // necesitamos llamar async wait () y esperar para obtener 10 // recuerda, no podemos usar "await"
// }
// PD La tarea es técnicamente muy simple, pero la pregunta es bastante común para los desarrolladores nuevos en async / await.
 

async function wait() {
  console.log('ingreso a wait')
  await new Promise(resolve => setTimeout(resolve, 1000)); return 10;
}

async function f() {
  console.log('llamando')
  console.log(await wait());
}
f();

// Respuesta: 
// Tendriamos que poner en una variable pero igual tenemos que utilizar await para que resuelva la promesa y la funcion tiene que ser async para que pueda reconocer el
// comando await.