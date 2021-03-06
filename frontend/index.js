document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("new-item-form");
  const itemArea = document.getElementById("item-area");

  fetchItems();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    CreateNewItem(formData);
    e.target[0].value = ""
  });

  itemArea.addEventListener("click", (e) => {
    let ItemDiv = e.target.parentNode.parentNode.parentNode;
    let id = ItemDiv.id.slice(5);
    const item = Item.findByID(id);
    if (e.target.parentNode.className === "remove" && e.target.parentNode.tagName === "BUTTON") {
      item.remove();
      deleteItem(item);
    } else if (e.target.parentNode.className === "edit" && e.target.parentNode.tagName === "BUTTON") {
      item.morphToEdit();
      ItemDiv.addEventListener('keypress', (enter) => {
        console.log(enter)
        if (enter.key === 'Enter') {
          
          let formData = new FormData()
          
          formData.append('name', document.getElementById(`${item.id}-name`).value)
          item.name = formData.get('name');
          updateItem(item, formData);
          item.morphToShow();
        }
      })
    } 
  });
});

const BASE_URL = "http://localhost:3000";

function fetchItems() {
  return fetch(BASE_URL)
    .then((req) => req.json())
    .then((response) => {
      for (let i of response) {
        let item = new Item(i);
        item.render();
      }
    });
}

function CreateNewItem(item) {
  return fetch(`${BASE_URL}/new`, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: item,
  })
    .then((req) => req.json())
    .then((response) => {
      console.log(response);
      let newItem = new Item(response);
      newItem.render();
    });
}

function deleteItem(item) {
  return fetch(`${BASE_URL}/${item.id}`, {
    method: "DELETE",
    header: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((item = console.log(item)))
    .catch((error) => console.error(error));
}

function updateItem(item, formData) {
  return fetch(`${BASE_URL}/${item.id}`, {
    method: "PATCH",
    header: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: formData
  })
    .then((req) => req.json())
    .then((item) => console.log(item));
}
