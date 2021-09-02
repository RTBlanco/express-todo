// const BASE_URL = "http://localhost:3000";
const BASE_URL = 'http://10.0.0.112:3000'

export function fetchItems() {
  return fetch(BASE_URL)
    .then((req) => req.json())
}


export function createNewItem(item) {
  return fetch(`${BASE_URL}/new`, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: item,
  })
    .then((req) => req.json())
}

export function deleteItem(item) {
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

export function updateItem(item, formData) {
  return fetch(`${BASE_URL}/${item.id}`, {
    method: "PATCH",
    header: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: formData
  })
    .then((req) => req.json())
}
