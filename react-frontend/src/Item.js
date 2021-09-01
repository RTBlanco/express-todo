
function Item({name, id}){
  return (
    <>
      <div className="item">
        <h3>{name}</h3>
        <div class="settings">
          <button class="edit" ><img src="src/images/pencil.png" alt="x"/></button>
          <button class="remove" ><img src="src/images/X.png" alt="pencil"/></button>
        </div>
      </div>
    </>
  )
}

export default Item;