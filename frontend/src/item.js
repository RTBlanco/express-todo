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
    const itemDiv = document.getElementById(`item-${this.id}`)
    itemDiv.remove();
    Item.delete(this)
  }

  static findByID(id){
    return Item.all.find(i => i.id == id)
  }

  static delete(item){
    let index = Item.all.indexOf(item)
    Item.all.splice(index, 1)
  }
}