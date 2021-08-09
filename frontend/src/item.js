class Item {
  static all = [];
  constructor({id, name}){
    this.id = id;
    this.name = name;
    Item.all.push(this)
  }

  render() {
    const items = document.getElementById('item-area');
    const item = document.createElement('div');
    item.className = 'item';
    item.id = `item-${this.id}`
    item.innerHTML = `
      <h3>${this.name}</h3>
      <div class="settings">
        <button>edit</button>
        <button>x</button>
      </div>
    `
    items.appendChild(item)
  }

  remove(){
    const item = document.getElementById(`item-${this.id}`)
    itemDiv.remove();
    Item.delete(this)
  }

  morphToEdit() {
    const item = document.getElementById(`item-${this.id}`);
    item.innerHTML = `
      <input type="text" name="name" id="${this.id}-name" value="${this.name}">
      <div class="settings">
        <button>save</button>
        <button>x</button>
      </div>
    `
  }

  morphToShow() {
    const item = document.getElementById(`item-${this.id}`);
    item.innerHTML = `
      <h3>${this.name}</h3>
      <div class="settings">
        <button>edit</button>
        <button>x</button>
      </div>
    `
  }

  static findByID(id){
    return Item.all.find(i => i.id == id)
  }

  static delete(item){
    let index = Item.all.indexOf(item)
    Item.all.splice(index, 1)
  }


}