// creare array vuoto
const listMails = [];
console.log(listMails);
// ciclo for per inserire 10 mail 
for (let i = 0; i < 10; i++) {
  axios
  // recuperato response di API 
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((res) => {
      // console.log(res);
      // recuperiamo dall'oggetto la proprietà data e poi la proprietà response 
      const newEmail = res.data.response;
      listMails.push(newEmail);
      // se l'indice dell'array è uguale a 9 allora inizializza la funzione 
      if (i == 9){
        insertEmails()
      }
    });
}

function insertEmails() {
  // ciclo for per pushare le mail dentro innerHTML 
  for (let i = 0; i < listMails.length; i++) {
   listDomElement.innerHTML += `<li>${listMails[i]}</li>`;
  }
}
const listDomElement = document.querySelector('.email');
