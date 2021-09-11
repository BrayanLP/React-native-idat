// RETO:
// a) Descripción del reto
// Escriba un bucle for que iterará de 0 a 20. Para cada iteración, verificará si el número actual es
// par o impar, y lo informará en la pantalla (por ejemplo, "2 es par").
// Escriba un bucle for que iterará de 0 a 10. Para cada iteración del bucle for, multiplicará el número
// por 9 y registrará el resultado (por ejemplo, "2 * 9 = 18").
// Bonificación: utilice un bucle for anidado para mostrar las tablas de cada multiplicador del 1 al
// 10 (100 resultados en total).
// Notas:
// No olvide devolver el resultado

const number = window.prompt("Ingrese un número");

console.log('======= RETO 1 =======')
for (let i = 0; i < number; i++) { 
  if (i % 2 == 0) {
    console.log(`${i} es par`);
  }
  else {
    console.log(`${i} es impar`);
  }
  
}

console.log('======= RETO 2 =======')
for (let j = 0; j < number; j++) { 
  console.log(j * 9);
  
}
console.log('======= BONUS =======')
// multiplicador de 1 al 10
for (let a = 1; a <= 10; a++) {
  for (let b = 1; b <= 10; b++) {
    console.log(`${a} * ${b} = ${a * b}`);
  }
}