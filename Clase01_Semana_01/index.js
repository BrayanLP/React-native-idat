
const date = new Date();

document.body.innerHTML = `<h1>Hoy es ${date}</h1>`
document.body.style.backgroundColor = '#212121';
document.body.style.color = '#fff';

let title = document.createElement('h1')
let heading = document.createTextNode('Hola, mundo');

title.appendChild(heading);

let p = document.createElement('p');
let t = document.createTextNode('¡Hola!');

p.appendChild(t);

document.body.appendChild(title);
document.body.appendChild(p);