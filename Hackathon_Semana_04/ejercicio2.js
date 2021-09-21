// Ejercicio #2
// Promesa: luego vs atrapar
// ¿Son estos fragmentos de código iguales? En otras palabras, ¿se comportan de la misma manera en cualquier circunstancia, para cualquier función de controlador?
// promise.then(f1).catch(f2);
// Versus:
// promise.then(f1, f2);

// Respuesta
// La unica diferencia entre ambos, es que en 
// la primera se estan mapeando las excepciones o capturan los posible errores en la promesa.