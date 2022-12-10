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

    deleteClass(classes) {
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
        this.deleteClass('off');
    }

    turnOff() {
        this.addClass('off');
    }
}

class ActionButton extends GameElement {
    static get emptyButtons() {
        return gameMatrix.flat().filter((e) => e.sign === null);
    }

    static get allButtons() {
        return gameMatrix.flat();
    }

    static toggleAll() {
        const classes = {};
        classes.add = currentTurn === 'O' ? 'buttonO' : 'buttonX';
        classes.remove = currentTurn === 'O' ? 'buttonX' : 'buttonO';

        ActionButton.allButtons.forEach((button) => {
            const isLocked = button.element.classList.contains('locked');

            if (!isLocked || isFinishedGame) {
                button.deleteClass([
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
        const allButtons = ActionButton.allButtons;
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].sign = null;
            allButtons[i].turnOn();
            allButtons[i].deleteClass('locked');

            if (!gameMatrix.flat().some((e) => e.sign)) {
                allButtons[i].addAttribute({
                    onclick: `chooseButton(${i})`,
                });
            }
        }

        ActionButton.toggleAll();
    }

    static lockEmptyButtons() {
        ActionButton.emptyButtons.forEach((button) => {
            button.lock();
        });
    }

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

    lock() {
        if (isFinishedGame) this.turnOff();
        this.addClass('locked');
        this.deleteAttribute(['onclick']);
    }

    highlight() {
        this.addClass('winnerButton');
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
