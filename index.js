let network = document.getElementById('network');
let number = document.getElementById('number');
let request = document.getElementById('request');
let form =document.getElementById('form');

request.addEventListener('click', (e) => {
  e.preventDefault();
  let formData = new FormData();
  formData.append('network', network.value);
  formData.append('phone', number.value);
  
  axios.post('https://giveaway-btd.herokuapp.com/submit',
    formData
  ).then( body => {
    console.log(body.data);
  }).catch( e => {
    console.log(e.toJSON());
  });
});
