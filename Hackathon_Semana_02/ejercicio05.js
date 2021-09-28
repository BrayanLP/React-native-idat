// Escribe una función filterRange(arr, a, b) que obtiene una matriz arr, busca elementos con
// valores mayores o iguales a ay menores o iguales ab y devuelve un resultado como una matriz.
// La función no debería modificar la matriz. Debería devolver la nueva matriz.
// Por ejemplo:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (matching values)
// alert( arr ); // 5,3,8,1 (not modified)

let arr = [5, 3, 8, 1];
function filterRange(arr, a, b ){
  let newArr = []
  let filter = arr.filter(item => {
    // (a <= item && item <= b)
    if(a <= item && item <= b){
      newArr.push(item)
    }
  });
  // console.log(newArr);
  return newArr;

}

let filtered = filterRange(arr, 1, 4);
console.log( filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified)