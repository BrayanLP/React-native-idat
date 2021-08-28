/*
  Formula: 
  IMC= Peso (kg) / ( Estatura (m)  x Estatura (m) )
*/
// let sign = prompt("What's your sign?");

let peso = window.prompt("¿Cual es tu peso en KG?");
let estatura = window.prompt("¿Cual es tu estatura en CM?");
let estaturaMetros = estatura / 100
let imc = peso / (estaturaMetros * estaturaMetros)
if(imc){
  let result = `${imc.toFixed(2)}%`
  document.getElementById('result').innerText = result;
}
else{
  document.getElementById('result').innerText = 'No se puedo calcular los resultados';

}
console.log('imc')