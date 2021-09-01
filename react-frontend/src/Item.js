
function Item(){
  return (
    <>
      <h3>${this.name}</h3>
      <div class="settings">
        <button class="edit" ><img src="src/images/pencil.png" alt="x"/></button>
        <button class="remove" ><img src="src/images/X.png" alt="pencil"/></button>
      </div>
    </>
  )
}

export default Item;