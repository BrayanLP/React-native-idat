// Ejercicio #6
// Establecer y disminuir para contador
// Modifique el código de makeCounter () para que el contador también pueda disminuir y establecer
// el número:
// • counter () debe devolver el siguiente número (como antes).
// • counter.set (value) debe establecer el contador en valor.
// • counter.decrease () debería disminuir el contador en 1.
// Consulte el código de la zona de pruebas para ver el ejemplo de uso completo.
// PD Puede utilizar una propiedad de cierre o de función para mantener el recuento actual. O escribe
// ambas variantes.

const makeCounter =  { // instead of: // 
  count: 0 ,
  counter: function() { 
    return  this.count + 1; 
  },
  set: function(value) { 
    return this.count = value; 
  },
  decrease: function() {
    return this.count - 1;
  } 
}  
console.log(makeCounter.counter());
console.log(makeCounter.set(100));
console.log(makeCounter.decrease());