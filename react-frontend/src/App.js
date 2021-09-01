import './App.css';
import { useState } from 'react';


function App() {
  const [items, setItems] = useState([])

  const createItem = e => {
    e.preventDefault();
    const newITem = {
      name: e
    }
    console.log(newITem)
  }

  return (
    <div id="header">
      <h1>Todo List!</h1>
      <form id="new-item-form" onSubmit={createItem}>
        <input id="form-input" type="text" name="name" placeholder="name" />
      </form> 
    </div>
  );
}

export default App;
