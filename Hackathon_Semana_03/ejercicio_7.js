// Ejercicio #7
// Repita hasta que la entrada sea correcta
// Escriba un bucle que solicite un número mayor que 100.
// Si el visitante ingresa otro número, pídale que ingrese nuevamente.
// El bucle debe solicitar un número hasta que el visitante ingrese un número mayor que 100 o cancele
// la entrada / ingrese una línea vacía.
// Aquí podemos asumir que el visitante solo ingresa números.
// No es necesario implementar un manejo especial para una entrada no numérica en esta tarea.

const number = window.prompt("Ingresar número") 

while(number < 100){
  const number = window.prompt("Ingresar número")
  if(number < 100){
    window.alert("Ingresar número mayor que 100")
  }
  else{
    break;
  }
}