class StoreDirectory {

  constructor() {
    this._stores = {};
  }

  get(name) {
    switch(name) {
      case "Person":
        return this._stores["PeopleStore"];
      case "Session":
        return this._stores["SessionsStore"];
    }
  }

  add(store) {
    this._stores[store.name] = store;
  }
}


module.exports = new StoreDirectory();
