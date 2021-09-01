import pencil from '../src/images/pencil.png';
import xBtn from '../src/images/X.png';
import {useState} from 'react';


function Item({name, id}){
  const [editing, setEditing] = useState(false);



  const renderNormal = () => {
    return (
      <>
        <h3>{name}</h3>
        <div class="settings">
          <button className="edit" ><img src={pencil} alt="x"/></button>
          <button className="remove" ><img src={xBtn} alt="pencil"/></button>
        </div>
      </>
    )
  }

  const renderEdit = () => {
    return (
      <>
        <input className="edit-input" type="text" name="name" value="${this.name}" />
        <div className="settings">
          <button class="remove"><img src={xBtn} alt="x"/></button>
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