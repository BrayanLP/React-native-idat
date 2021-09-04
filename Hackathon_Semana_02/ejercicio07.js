// Ejercicio #6
// Crea una calculadora extensible
// Crea una función constructora Calculator que crea objetos de calculadora "extensibles".
// La tarea consta de dos partes.
// Primero, implemente el método calculate(str) que lleva una string como "1 + 2" en el formato
// “Numero operator Numero” (delimitado por espacios) y devuelve el resultado. Debe entender
// más + y menos -.
// Ejemplo de uso:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
// Luego agrega el método addMethod(name, func) que le enseña a la calculadora una nueva
// operación. Toma el nombre del operador y la función de dos argumentos func (a, b) que lo
// implementa.
// Por ejemplo, agreguemos la multiplicación *, la división / y la potencia **:
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// • No hay paréntesis ni expresiones complejas en esta tarea.
// • Los números y el operador están delimitados con exactamente un espacio.
// • Puede haber un manejo de errores si desea agregarlo.

class Calculator{
  constructor(operador, valor1, valor2){
    this.operador = operador;
    this.valor1 = valor1;
    this.valor2 = valor2;
  }
  addMethod(operador, valor1 , valor2){
    let res = '' 

    switch (operador) {
      case '-':
        res = valor1 - valor2
        break;
      case '+':
        res = valor1 + valor2
        break;
      case '*':
        res = valor1 * valor2
        break;
      case '/':
        res = valor1 / valor2
        break;
      case '**': 
        res = valor1 ** valor2
        break;
    
      default:
        break;
    } 
    return res 
  }
  calculate(value){ 
    let operator = value.split(' ')[1]
    let a = value.split(' ')[0]
    let b = value.split(' ')[2]  
    const res = this.addMethod(operator, Number(a), Number(b) )
    return res
  }


}
let powerCalc = new Calculator; 
let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8
console.log(powerCalc.calculate("2 - 3"));
console.log(powerCalc.calculate("2 + 3"));
console.log(powerCalc.calculate("2 * 3"));
console.log(powerCalc.calculate("10 / 2"));