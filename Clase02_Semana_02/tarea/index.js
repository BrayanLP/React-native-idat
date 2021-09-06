// RETO
// a) Descripción del reto
// 1. Muestra el letrero Usando if..else, escriba el código que obtiene un número a través del
// indicador y luego muestra en alerta:
// • 1, si el valor es mayor que cero.
// • -1, si es menor que cero.
// • 0 si es igual a cero.
// En este reto asumimos que la entrada es siempre un número.

let number = window.prompt("¿Cual es tu número?");

if(number > 0){
  alert(1);
}
else if(number < 0){
  alert(-1)
}
else if(number == 0){
  alert(0)
}
else{
  alert('No existe valor para el letrero')
}