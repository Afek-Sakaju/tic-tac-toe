class GameElement {
    constructor(id) {
        this._id = id;
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

    removeAttribute(attributes) {
        if (!(attributes instanceof Array)) attributes = [attributes];

        for (const attribute of attributes) {
            this.element.removeAttribute(attribute);
        }
    }

    turnOn() {
        this.removeClassClass('off');
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
        return mainGame.matrix.flat();
    }

    static toggleAll() {
        const classes = {};
        classes.add = turn % 2 ? 'buttonO' : 'buttonX';
        classes.remove = turn % 2 ? 'buttonX' : 'buttonO';

        ActionButton.allButtons.forEach((button) => {
            if (!button.classList.contains('locked') || isFinishedGame) {
                const b1 = new GameElement(button.id);

                b1.removeClass([
                    'defaultLogo',
                    'locked',
                    'winnerButton',
                    classes.remove,
                ]);

                b1.addClass(classes.add);
            }
        });
    }

    static resetAll() {
        ActionButton.allButtons.forEach((element) => {
            resetButton(element);
        });
    }

    static lockEmptyButtons() {
        ActionButton.emptyButtons.forEach((button) => {
            ActionButton.lock(button.id);
        });
    }

    static lockAllButtons() {
        ActionButton.allButtons.forEach((button) => {
            ActionButton.lock(button.id);
        });
    }

    constructor() {
        super();
        this._sign;
    }

    lock() {
        if (isFinishedGame) this.addClass('gameOver');
        this.addClass('locked');
        this.removeAttribute(['onclick', 'name']);
    }

    set sign(sign) {
        this._sign = sign;
    }

    get sign() {
        return this._sign;
    }
}

class SoundButton extends GameElement {
    constructor() {
        super();
    }

    toggleSound() {
        if (!isMute) {
            isMute = true;
            buttonSound('toggleOff');
            this.removeAttribute('src');
            this.addAttribute({
                src: './assets/pictures/toggle-sound-off.png',
            });
        } else {
            isMute = false;
            buttonSound('toggleOn');
            this.removeAttribute('src');
            this.addAttribute({
                src: './assets/pictures/toggle-sound-on.png',
            });
        }
    }
}
