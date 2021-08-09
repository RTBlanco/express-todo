class Item {
  constructor({id, name}){
    this.id = id;
    this.name = name;
  }

  render() {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `
      <h3>${this.name}</h3>
      <div class="settings">
        <button>edit</button>
        <button>x</button>
      </div>
    `

    return item;
  }
}