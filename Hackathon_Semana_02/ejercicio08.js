// Ejercicio 8
// Reescriba 'if..else' en '?'
// Reescriba if..else usando múltiples operadores ternarios '?'.
// Para facilitar la lectura, se recomienda dividir el código en varias líneas.
// Let mensaje;
// if (login == 'Empleado') {
// mensaje = 'Hola';
// } else if (login == 'Director') {
// mensaje = 'Saludos';
// } else if (login == '') {
// mensaje = 'Sin inicio de sesión';
// } else {
// mensaje = '';
// }

let message = ''
let login = 'Empleado'

message = login === 'Empleado' ? 'Hola': login === 'Director' ? 'Saludos': login === '' ? 'Sin inicio de sesion': ''

console.log('Valor ==>', message)