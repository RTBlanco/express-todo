import pencil from '../src/images/pencil.png';
import xBtn from '../src/images/X.png';
import { useState } from 'react';
import { updateItem } from './helper/connection';


function Item({item, remove}){
  const [editing, setEditing] = useState(false);
  const [itemName, setName] = useState(item.name)

  const transform = () =>{
    setEditing(prev => !prev)
  }

  const handleChange = e => {
    console.log(e)
    setName(e.target.value)
  }

  const handleOnKeyPress = e => {
    console.log(e)
    if (e.key === "Enter") {
      transform()
      if (item.name !== itemName) {
        const form = new FormData()
        form.append('name', e.target.value)
        updateItem(item, form)
        // save item
      }
    }
  }

  const renderNormal = () => {
    return (
      <>
        <h3>{itemName}</h3>
        <div className="settings">
          <button onClick={transform} className="edit" ><img src={pencil} alt="x"/></button>
          <button oncClick={() => remove(item) } className="remove" ><img src={xBtn} alt="pencil"/></button>
        </div>
      </>
    )
  }

  const renderEdit = () => {
    return (
      <>
        <input className="edit-input" type="text" name="name" value={itemName} onChange={handleChange} 
          onKeyPress={handleOnKeyPress} />
        <div className="settings">
          <button oncClick={() => remove(item) } className="remove"><img src={xBtn} alt="x"/></button>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="item">
        {editing ? renderEdit() : renderNormal()}
      </div>
    </>
  )
}

export default Item;