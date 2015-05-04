class ModelDirectory {

  constructor() {
    this._models = {};
  }

  get(name) {
    return this._models["Person"];
  }

  add(model) {
    this._models[model.name] = model;
  }
}


module.exports = new ModelDirectory();
