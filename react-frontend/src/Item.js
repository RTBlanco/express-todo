import pencil from '../src/images/pencil.png';
import xBtn from '../src/images/X.png';
import {useState} from 'react';


function Item({name, id}){
  const [editing, setEditing] = useState(false);
  const [itemName, setName] = useState(name)

  const transform = () =>{
    setEditing(prev => !prev)
  }

  const handleChange = e => {
    console.log(e)
    setName(e.target.value)
  }

  const renderNormal = () => {
    return (
      <>
        <h3>{itemName}</h3>
        <div className="settings">
          <button onClick={transform} className="edit" ><img src={pencil} alt="x"/></button>
          <button className="remove" ><img src={xBtn} alt="pencil"/></button>
        </div>
      </>
    )
  }

  const renderEdit = () => {
    return (
      <>
        <input className="edit-input" type="text" name="name" value={itemName} onChange={handleChange} 
          onKeyPress={(e) => e.key === 'Enter' && transform()} />
        <div className="settings">
          <button className="remove"><img src={xBtn} alt="x"/></button>
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