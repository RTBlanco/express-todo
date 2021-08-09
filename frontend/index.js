document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('new-item-form'); 

  fetchItems()
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)

    CreateNewItem(formData)
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
  return fetch(`${BASE_URL}/new`,{
    method: "POST",
    header: {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    },body: item
  })
    .then(req => req.json())
    .then(response => {
      console.log(response)
      let newItem = new Item(response);
      newItem.render(); 
    })
}