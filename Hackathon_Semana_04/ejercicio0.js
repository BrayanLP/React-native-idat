// Ejercicio #0
// ¿Volver a resolver una promesa?
// ¿Cuál es el resultado del siguiente código?

// Resultado:
let promise = new Promise(function (resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});
promise.then(alert);

// El resultado sale una alerta con el número 1