// Ejercicio #6
// Compruebe si está vacío
// Escribe la función isEmpty(obj) que regresa true si el objeto no tiene propiedades, false de lo
// contrario.
// Debería funcionar así:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}

let schedule = {};
alert(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';
alert(isEmpty(schedule)); // false
