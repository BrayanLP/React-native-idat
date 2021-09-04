const languages = [
  {
    language: "Español",
    text: "Bienvenido al curso de React Native en PachaQtec",
    id: 1,
  },
  {
    language: "Ingles",
    text: "Welcome to the React Native course at PachaQtec",
    id: 2,
  },
  {
    language: "Francés",
    text: "Bienvenue dans le cours React Native chez PachaQtec",
    id: 3,
  },
  {
    language: "Italiano",
    text: "Benvenuti al corso React Native presso PachaQtec",
    id: 4,
  },
  {
    language: "Portugués",
    text: "Bem-vindo ao curso React Native na PachaQtec",
    id: 5,
  },
];

const translate = (data, language, text) =>{ 
  const valid = identityLanguage(data, text)
  const translate = data.find((lan) => lan.language === language)
  if(valid){
    // console.log(translate)
    return translate.text
  }
  else{
    return 'No se encontro coincidencias'
  }
}

const identityLanguage = (data, text)=>{
  const mach = data.find((res) => res.text === text)
  if(mach){
    return mach.language
  }
  else{
    return false
  }
}

const word = "Bienvenido al curso de React Native en PachaQtec"
const errorWord = "No existe"

console.log('===== GOOD ====')
console.log(identityLanguage(languages , word))
console.log(translate(languages , 'Portugués', word))

console.log('==== BAD =====')
console.log(identityLanguage(languages , errorWord))
console.log(translate(languages , 'Portugués', errorWord))

