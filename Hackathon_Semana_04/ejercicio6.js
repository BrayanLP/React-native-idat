// Ejercicio #6
// Error en setTimeout
// ¿Qué piensas? ¿Se activará el .catch? Explica tu respuesta.
new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// Lanza una excepcion con thorw pero no se captura nada en el catch y sale un mensaje en 
// console con la funcion Error() y el mensaje que le pasemos.