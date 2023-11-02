for (let i = 0; i < 10; i++) {
  axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((res) => {
      console.log(res.data.response);
      const newEmail = res.data.response;
      listDomElement.innerHTML += `<li>${newEmail}</li>`;
    });
}

const listDomElement = document.querySelector('.email');
