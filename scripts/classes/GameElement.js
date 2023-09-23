class GameElement {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  get element() {
    return document.getElementById(this._id);
  }

  addClass(classes) {
    const classesArray = assertArray(classes);

    classesArray.forEach((c) => this.element.classList.add(c));
  }

  deleteClass(classes) {
    const classesArray = assertArray(classes);

    classesArray.forEach((c) => this.element.classList.remove(c));
  }

  addAttribute(attributes) {
    const attributesArray = assertArray(attributes);

    attributesArray.forEach((attr) => {
      Object.entries(attr).forEach(([name, value]) => {
        this.element.setAttribute(name, value);
      });
    });
  }

  deleteAttribute(attributes) {
    const attributesArray = assertArray(attributes);

    attributesArray.forEach((attr) => this.element.removeAttribute(attr));
  }

  toggleClass(mode, shouldToggleOff) {
    if (shouldToggleOff) this.deleteClass(mode);
    else this.addClass(mode);
  }

  disable() {
    this.toggleClass('locked');
    this.deleteAttribute(['onclick']);
  }
}
