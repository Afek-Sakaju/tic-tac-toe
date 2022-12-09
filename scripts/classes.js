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

        for (const class1 of classes) {
            this.element.classList.add(class1);
        }
    }

    removeClass(classes) {
        if (!(classes instanceof Array)) classes = [classes];

        for (const class1 of classes) {
            this.element.classList.remove(class1);
        }
    }

    addAttribute(attributes) {
        if (!(attributes instanceof Array)) attributes = [attributes];

        for (const attribute of attributes) {
            for (const [name, value] of Object.entries(attribute)) {
                this.element.setAttribute(name, value);
            }
        }
    }

    deleteAttribute(attributes) {
        if (!(attributes instanceof Array)) attributes = [attributes];

        for (const attribute of attributes) {
            this.element.removeAttribute(attribute);
        }
    }

    turnOn() {
        this.removeClass('off');
    }

    turnOff() {
        this.addClass('off');
    }
}

class ActionButton extends GameElement {
    static get emptyButtons() {
        return document.querySelectorAll('[name="empty"]');
    }

    static get allButtons() {
        return gameMatrix.flat();
    }

    static toggleAll() {
        const classes = {};
        classes.add = turn % 2 ? 'buttonO' : 'buttonX';
        classes.remove = turn % 2 ? 'buttonX' : 'buttonO';

        ActionButton.allButtons.forEach((button) => {
            const isLocked = button.element.classList.contains('locked');

            if (!isLocked || isFinishedGame) {
                button.removeClass([
                    'defaultLogo',
                    'locked',
                    'winnerButton',
                    classes.remove,
                ]);

                button.addClass(classes.add);
            }
        });
    }

    static resetAll() {
        ActionButton.allButtons.forEach((button) => {
            button.sign = null;
            button.addAttribute({
                onclick: `chooseButton(${button.id.charAt(12)})`,
            });
        });

        ActionButton.toggleAll();
    }

    static lockEmptyButtons() {
        ActionButton.emptyButtons.forEach((button) => {
            button.lock();
        });
    }

    static lockAllButtons() {
        ActionButton.allButtons.forEach((button) => {
            button.lock();
        });
    }

    constructor(id) {
        super(id);
        this._sign = null;
    }

    lock() {
        if (isFinishedGame) this.addClass('gameOver');
        this.addClass('locked');
        this.deleteAttribute(['onclick', 'name']);
    }

    set sign(sign) {
        this._sign = sign;
    }

    get sign() {
        return this._sign;
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
        new Audio(`./assets/sounds/sound-${sound}.mp3`).play();
    }

    toggleSound() {
        if (!this.isMute) {
            this.isMute = true;
            this.play('toggleOff');
            super.deleteAttribute('src');
            super.addAttribute({
                src: './assets/pictures/toggle-sound-off.png',
            });
        } else {
            this.isMute = false;
            this.play('toggleOn');
            super.deleteAttribute('src');
            super.addAttribute({
                src: './assets/pictures/toggle-sound-on.png',
            });
        }
    }
}
