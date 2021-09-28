// Ejercicio #4
// Reescribe "rethrow" con async / await
// A continuación puede encontrar el ejemplo de "relanzamiento". Vuelva a escribirlo usando async / await en lugar de .then / catch.
// Y deshacerse de la recursividad a favor de un bucle en demoGithubUser: con async / await que se vuelve fácil de hacer.
class HttpError extends Error { 
  constructor(response) {
    super(`${response.status} for ${response.url}`); 
    this.name = 'HttpError';
    this.response = response; 
  }
}

async function loadJson(url) {
  const response = await fetch(url)
  try{
    return await response.json();
  }
  catch(err){
    throw new HttpError(response); 
  }
}

async function demoGithubUser() { 
  let name = prompt("Enter a name?", "brayanlpdasdsa"); 
  const info =  await loadJson(`https://api.github.com/users/${name}`)
  console.log(info);
  if(info.id){
    alert(`Full name:${info.name}.`);
  }
  else{
    demoGithubUser();
  }
}

demoGithubUser();