class GameElement {
    constructor(id, modes) {
        this._id = id;
        this.modes = modes;
    }

    get id() {
        return this._id;
    }

    get element() {
        return document.getElementById(this._id);
    }

    addClass(classes) {
        classes = assertArray(classes);

        classes?.forEach((c) => this.element.classList.add(c));
    }

    deleteClass(classes) {
        classes = assertArray(classes);

        classes?.forEach((c) => this.element.classList.remove(c));
    }

    addAttribute(attributes) {
        attributes = assertArray(attributes);

        attributes?.forEach((attr) => {
            Object.entries(attr).forEach(([name, value]) => {
                this.element.setAttribute(name, value);
            });
        });
    }

    deleteAttribute(attributes) {
        attributes = assertArray(attributes);

        attributes?.forEach((attr) => this.element.removeAttribute(attr));
    }

    toggleMode(modeName, shouldToggleOff) {
        const classes = this?.modes?.[modeName];

        if (shouldToggleOff) this.deleteClass(classes);
        else this.addClass(classes);
    }

    disable() {
        this.addClass('disabled');
        this.deleteAttribute(['onclick']);
    }
}

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

class SoundButton extends GameElement {
    constructor(id, modes) {
        super(id, modes);
        this._isMute = false;
    }

    get isMute() {
        return this._isMute;
    }

    set isMute(bool) {
        this._isMute = bool;
    }

    play(sound) {
        if (this.isMute && sound !== 'toggleOff') return;
        new Audio(`./assets/sounds/sound-${sound}.mp3`).play();
    }

    toggleSound() {
        if (!this.isMute) {
            this.isMute = true;
            this.play('toggleOff');
            this.deleteAttribute('src');
            this.addAttribute({
                src: './assets/pictures/toggle-sound-off.png',
            });
        } else {
            this.isMute = false;
            this.play('toggleOn');
            this.deleteAttribute('src');
            this.addAttribute({
                src: './assets/pictures/toggle-sound-on.png',
            });
        }
    }
}
