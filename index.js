let network = document.getElementById('network');
let number = document.getElementById('number');
let request = document.getElementById('request');

const overlay = document.getElementById('overlay')
const responseCover = document.getElementById('response-cover')
const resposne = document.getElementById('response')
const loader = document.getElementById('loader')

request.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.classList.remove('hidden')
  let data = {
    network: network.value,
    phone: number.value
  }
  axios.post('https://giveaway-btd.herokuapp.com/submit',
    data,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  ).then( body => {
    if( body.data.success){
      resposne.classList.add('text-green-600')
    } else {
      resposne.classList.add('text-red-600')
    }
    responseCover.classList.remove('hidden')
    loader.classList.add('hidden')
    resposne.textContent = body.data.msg
  }).catch( e => {
    responseCover.classList.remove('hidden')
    loader.classList.add('hidden')
    resposne.classList.add('text-red-600')
    resposne.textContent = e.message
  });
});
