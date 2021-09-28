// Ejercicio #7
// Salida cada segundo
// Escriba una función printNumbers (from, to) que genere un número cada segundo, comenzando desde y terminando con hasta.
// Haz dos variantes de la solución.
// 1. Utilizando setInterval.
// 2. Usando setTimeout anidado.


function printNumbers(from, to){
  var i = from;
    var interval = setInterval(function(){
        if(i <= to){
            console.log('setInterval', i);
            i++;
        }else{
            clearInterval(interval);
        }
    }, 1000);
}

function printNumbersSetTimeout(from , to){
  var i = from;
    setTimeout(function(){
        if(i <= to){
            console.log('setTimeout',i);
            i++;
            printNumbersSetTimeout(i, to);
        }
    }, 1000);
}

printNumbers(1, 10);
printNumbersSetTimeout(1, 10);