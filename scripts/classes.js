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
        if (!(classes instanceof Array)) classes = [classes];

        classes?.forEach((c) => this.element.classList.add(c));
    }

    deleteClass(classes) {
        if (!(classes instanceof Array)) classes = [classes];

        classes?.forEach((c) => this.element.classList.remove(c));
    }

    addAttribute(attributes) {
        if (!(attributes instanceof Array)) attributes = [attributes];

        attributes?.forEach((attr) => {
            Object.entries(attr).forEach(([name, value]) => {
                this.element.setAttribute(name, value);
            });
        });
    }

    deleteAttribute(attributes) {
        if (!(attributes instanceof Array)) attributes = [attributes];

        attributes?.forEach((attr) => this.element.removeAttribute(attr));
    }

    turnOn() {
        this.deleteClass('off');
    }

    turnOff() {
        this.addClass('off');
    }
}

class ActionButton extends GameElement {
    constructor(id) {
        super(id);
        this._sign = null;
    }

    set sign(sign) {
        this._sign = sign;
    }

    get sign() {
        return this._sign;
    }

    disable() {
        if (isFinishedGame) this.turnOff();
        this.addClass('disabled');
        this.deleteAttribute(['onclick']);
    }

    highlight() {
        this.addClass('winner-button');
    }
}

class SoundButton extends GameElement {
    constructor(id) {
        super(id);
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
