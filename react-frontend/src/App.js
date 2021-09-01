import './App.css';
import { useState } from 'react';


function App() {
  const [items, setItems] = useState([])

  return (
    
    
    <div id="header">
      <h1>Todo List!</h1>
      <form id="new-item-form">
        <input id="form-input" type="text" name="name" placeholder="name" />
      </form> 
    </div>
    
  
  );
}

export default App;
