let kayoIsGood = true

const cake = new Promise(
  (resolve, reject) => {
      if(kayoIsGood) {
          const cakeNumber = Math.round(Math.random() * 10);
          resolve(`Yo Kayo, Realizare ${cakeNumber} Tortas para su cumpleaños`);
      } else {
          const reason = new Error('Vamos a tener fiesta sin pasteles');
          reject(reason);
      }
  }
);


async function happyBirthday() {
  try{
      if(kayoIsGood){
        console.log("Happy Birthday")
      }
      let happy = await cake;
      console.log(happy);
      
  } catch(error) {
      console.log(error.message);
  }
}
(async () => {
  await happyBirthday();
})();
