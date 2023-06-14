class ActionButton extends GameElement {
  constructor(id, modes) {
      super(id, modes);
      this._sign = null;
  }

  set sign(sign) {
      this._sign = sign;
  }

  get sign() {
      return this._sign;
  }
}