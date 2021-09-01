import './App.css';
import { useState } from 'react';
import Item from './Item';


function App() {
  const [items, setItems] = useState([])

  const createItem = e => {
    e.preventDefault();
    const newITem = {
      name: e.target[0].value
    }
    setItems([...items, newITem])

    console.log(newITem)
    e.target[0].value = ''
  }

  const renderItems = () => {
    return items.map((item, idx) => <Item key={idx} name={item.name} />)
  }

  return (
    <>
      <div id="header">
        <h1>Todo List!</h1>
        <form id="new-item-form" onSubmit={createItem}>
          <input id="form-input" type="text" name="name" placeholder="name" />
        </form> 
      </div>
      <div id="item-area">
        {renderItems()}
      </div>
    </>
  );
}

export default App;
