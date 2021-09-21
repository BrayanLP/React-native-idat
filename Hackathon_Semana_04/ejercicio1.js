// Ejercicio #1
// Retrasar con una promesa
// La función incorporada setTimeout usa devoluciones de llamada.
// Crea una alternativa basada en promesas. La función delay (ms) debería devolver una promesa.
// Esa promesa debería resolverse después de ms milisegundos, de modo que podamos agregarle. Then, así:

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true);
    }, ms);
  });
} 

delay(3000).then(() => alert("runs after 3 seconds"));
