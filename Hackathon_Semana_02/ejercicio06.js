// Ejercicio #5
// Copiar y ordenar el arreglo
// Tenemos una variedad de cadenas arr. Quisiéramos tener una copia ordenada, pero no la
// modificamos.
// Crea una función copySorted(arr) que devuelve tal copia.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

const arr = ["HTML", "JavaScript", "CSS"];

function copySorted(data){
  const copy = Array.from(data)
  return copy.sort()
}



let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)