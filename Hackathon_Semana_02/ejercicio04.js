// Sumar números de entrada
// Escribe la función sumInput() esta:
// • Pregunta al usuario por valores usando prompt y almacena los valores en el arreglo.
// • Termina de preguntar cuando el usuario ingresa un valor no numérico, una cadena vacía
// o presiona “Cancelar”.
// • Calcula y devuelve la suma de elementos del arreglo.
// PD. Un cero 0 es un número válido, no detenga la entrada en cero.

let array = []
function sumInput(){
  let text = window.prompt("Ingresar un número: ");
  let toNumber = parseInt(text) 
  if(typeof toNumber === 'number' && toNumber >= 0){ 
    array.push(toNumber);
    sumInput();
    console.log(suma(array)) 
  }
  else{
    return;
  }
}

function suma(data){
  const suma = data.reduce((ant, next) =>{
    return ant + next
  })
  return `La suma es: ${suma}`
}

sumInput();