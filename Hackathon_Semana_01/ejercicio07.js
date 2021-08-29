// Ejercicio #7
// Propiedades de objeto de suma
// Tenemos un objeto que almacena los sueldos de nuestro equipo:
// let salaries = {
// John: 100,
// Ann: 160,
// Pete: 130
// }
// Escriba el código para sumar todos los salarios y guárdelo en la suma variable. Debería ser 390
// en el ejemplo anterior.
// Si salaries está vacío, entonces el resultado debe ser 0.

let suma = 0


let salaries = {
    John: 100,  
    Ann: 160, 
    Pete: 130
}

// Salaries vacios
// salaries = {}

for (let key in salaries) {
    if(key){
      suma += salaries[key]
    }
    else{
      suma = 0
    }

}

console.log(suma)