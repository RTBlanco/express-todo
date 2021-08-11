class Item {
  static all = [];
  static pencil = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>'
  static xButton = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/></svg>'

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
        <button class="edit" >${Item.pencil}</button>
        <button class="remove" >${Item.xButton}</button>
      </div>
    `
    items.appendChild(item)
  }

  remove(){
    const item = document.getElementById(`item-${this.id}`)
    item.remove();
    Item.delete(this)
  }

  morphToEdit() {
    const item = document.getElementById(`item-${this.id}`);
    item.innerHTML = `
      <input class="edit-input" type="text" name="name" id="${this.id}-name" value="${this.name}">
      <div class="settings">
        <button class="remove">${Item.xButton}</button>
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