class StoreDirectory {

  constructor() {
    this._stores = {};
  }

  get(name) {
    console.log(name);
    switch(name) {
      case "Person":
        return this._stores["People"];
    }
  }

  add(store) {
    this._stores[store.name] = store;
  }
}


module.exports = new StoreDirectory();
