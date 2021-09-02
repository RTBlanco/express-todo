import './App.css';
import { useState, useEffect } from 'react';
import Item from './Item';
import {fetchItems, createNewItem} from './helper/connection'



function App() {
  const [items, setItems] = useState([])

  const createItem = e => {
    e.preventDefault();

    const newITem = {
      name: e.target[0].value
    }

    setItems([...items, newITem])
    const item = new FormData(e.target[0].form)
    createNewItem(item)
    e.target[0].value = ''
  }

  useEffect(() => {
    fetchItems()
      .then(resp => {
        console.log(resp)
        setItems(resp)
      })
    // return () => {
    //   cleanup
    // }
  }, [])


  const renderItems = () => {
    return items.map((item, idx) => <Item key={idx} name={item.name} />)
  }

  return (
    <>
      <div id="header">
        <h1>Todo List!</h1>
        <form id="new-item-form" onSubmit={createItem}>
          <input id='name' className="form-input" type="text" name="name" placeholder="name" />
        </form> 
      </div>
      <div id="item-area">
        {renderItems()}
      </div>
    </>
  );
}

export default App;
