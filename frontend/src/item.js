class Item {
  constructor({id, name}){
    this.id = id;
    this.name = name;
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
}