// El geometrizador
// Cree 2 funciones que calculen las propiedades de un círculo, usando las definiciones aquí. Cree
// una función llamada calcCircumfrence: Pase el radio a la función. Calcule la circunferencia
// basándose en el radio y emite "La circunferencia es NN". Cree una función llamada calcArea: Pase
// el radio a la función. Calcule el área basándose en el radio y obtenga "El área es NN".

calcCircumfrence = (radio) => {
  const circum =  Math.PI * (radio * 2);
  console.log(`La circunferencia es ${circum}`);
  return circum;
}

calcArea = (radio) => {
  const area = Math.PI * (radio * radio);
  console.log(`El área es ${area}`);
  return area;
}


// La calculadora de la edad del cachorro
// Sabes cuántos años tiene tu perro en años humanos, pero ¿qué pasa con los años de perro?
// ¡Calcúlalo! Escriba una función llamada calculateDogAge que: toma 1 argumento: la edad de su
// cachorro. calcula la edad de su perro en función de la tasa de conversión de 1 año humano a 7
// años de perro. muestra el resultado en la pantalla de la siguiente manera: "¡Tu perrito tiene NN
// años en años de perro!" Llame a la función tres veces con diferentes conjuntos de valores.
// Bonificación: agregue un argumento adicional a la función que toma la tasa de conversión de años
// de humanos a perros.

calculateDogAge = (humanAge, conversionRate = 7) => {
  const dogAge = humanAge * conversionRate;
  console.log(`Tu perrito tiene ${dogAge} años en años de perro!`);
  return dogAge;
}