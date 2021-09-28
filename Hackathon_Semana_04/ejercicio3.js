// Ejercicio #3
// Reescribir usando async / await
// Reescriba este código de ejemplo del capítulo Encadenamiento de promesas usando async / await en lugar de .then / catch:

async function loadJson(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if(data.status === 200){
      return json;
    }
    else{
      throw new Error(`Ocurrio un error `, data.message);
    }
  } catch (error) {
    throw new Error(error.status);
  } 
}
loadJson("no-such-user.json"); // Error: 404
