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
    if (e.target.innerText === "x" && e.target.tagName === "BUTTON") {
      let nodeId = e.target.parentNode.parentNode.id;
      let id = nodeId.slice(5);
      const item = Item.findByID(id);
      item.remove();
      deleteItem(item);
    } else if (e.target.innerText === "edit" && e.target.tagName === "BUTTON") {
      let nodeId = e.target.parentNode.parentNode.id;
      let id = nodeId.slice(5);
      const item = Item.findByID(id);
      item.morphToEdit();
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

function deleteItem(item) {
  return fetch(`${BASE_URL}/${item.id}`,{
    method: "DELETE",
    header: {
      'Content-Type': 'application/json',
      "Accept" : "application/json",
    }
  })
  .then(item = console.log(item))
  .catch(error => console.error(error))
}