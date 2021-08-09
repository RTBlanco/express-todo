document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('new-item-form'); 

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = e.target[0].value;
  })
})

function CreateNewItem(name) {
  return fetch('localhost:3000/')
    .then(req => req.json())
    .then(response => console.log(response))
}