document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('new-item-form'); 
  const itemArea = document.getElementById('item-area');

  fetchItems()
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    CreateNewItem(formData)
  })

  itemArea.addEventListener('click', (e) => {
    // console.log(e.target.tagName)
    // console.log(e.target.innerText)
    if (e.target.innerText === "x" && e.target.tagName === "BUTTON") {
      console.log('clicked button');
      
    }
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