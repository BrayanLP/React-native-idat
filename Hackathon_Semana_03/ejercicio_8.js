// Ejercicio #8
// Salida de una lista de un solo enlace
// Supongamos que tenemos una lista con un solo enlace (como se describe en el capítulo Recurrencia
// y pila):
// let list = {
// value: 1,
// next: {
// value: 2,
// next: {
// value: 3,
// next: {
// value: 4,
// next: null
// }
// }
// }
// };
// Escriba una función printList (lista) que genere los elementos de la lista uno por uno.
// Haz dos variantes de la solución: usando un bucle y usando la recursividad.
// ¿Qué es mejor: con recursividad o sin ella?

function printList (lista) {
    console.log(lista.value);
    if (lista.next !== null) {
        printList(lista.next);
    } else {
        return;
    }
}
function printListBucle(list){
    while(list.next !== null){
      list = list.next;
      console.log(list.value);
    }
}
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

console.log('===== RECURSIVIDAD  =========')
console.log(printList(list));
console.log('=====BUCLE =========')
console.log(printListBucle(list));

// Para este ejemplo ambos casos no son complejos, tendria que evaluar cuando se usa recursividad y cuando no.