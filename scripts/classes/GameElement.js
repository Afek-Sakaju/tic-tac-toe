class GameElement {
    static get modes() {
        return GAME_ELEMENT_MODES;
    }

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
        classes = assertArray(classes);

        classes.forEach((c) => this.element.classList.add(c));
    }

    deleteClass(classes) {
        classes = assertArray(classes);

        classes.forEach((c) => this.element.classList.remove(c));
    }

    addAttribute(attributes) {
        attributes = assertArray(attributes);

        attributes.forEach((attr) => {
            Object.entries(attr).forEach(([name, value]) => {
                this.element.setAttribute(name, value);
            });
        });
    }

    deleteAttribute(attributes) {
        attributes = assertArray(attributes);

        attributes.forEach((attr) => this.element.removeAttribute(attr));
    }

    switchMode(modeName, shouldToggleOff) {
        const classes = GameElement.modes?.[modeName];

        if (shouldToggleOff) this.deleteClass(classes);
        else this.addClass(classes);
    }

    disable() {
        this.switchMode('disabled');
        this.deleteAttribute(['onclick']);
    }
}