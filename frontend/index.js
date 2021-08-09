document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('new-item-form'); 

  fetchItems()
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
  })
})

const BASE_URL = 'http://localhost:3000'


function fetchItems() {
  return fetch(BASE_URL)
    .then(req => req.json())
    .then(response => {
      for (let i of response) {
        let item = new Item(i);
        item.render()
      }
    })
}

function CreateNewItem(item) {

  return fetch(BASE_URL,{
    method: "POST",
    header: {
      "Accepts" : "application/json"
    },
    body: item
  })
    .then(req => req.json())
    .then(response => console.log(response))
}