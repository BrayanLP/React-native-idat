let fruits = ["Apples", "Pear", "Orange"];// insertar un nuevo valor en la "copia"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// ¿Qué hay en las frutas?
// Se agrega un valor mas al array siendo la respuesta
// [ 'Apples', 'Pear', 'Orange', 'Banana' ]
console.log(shoppingCart)


alert( fruits.length ); // 4
// El tamaño del array ahora es de 4 