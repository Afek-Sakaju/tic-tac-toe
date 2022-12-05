/*const game1 = new Game([
    [null, null, null],
    [null, null, null],
    [null, null, null],
]);*/

class Button {
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
}

class ActionButton extends Button {
    constructor() {
        super();
        this._emptyButtons = document.querySelectorAll('[name="empty"]');
        this._allButtons = document.querySelectorAll('.actionButton');
    }

    static get emptyButtons() {
        return this._emptyButtons;
    }

    static get allButtons() {
        return this._allButtons;
    }

    static toggleAll() {
        const classes = {};
        classes.add = turn % 2 ? 'buttonO' : 'buttonX';
        classes.remove = turn % 2 ? 'buttonX' : 'buttonO';

        ActionButton.all.forEach((button) => {
            if (!button.classList.contains('locked') || isFinishedGame) {
                const b1 = new Button(button.id);

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
        ActionButton.all.forEach((element) => {
            resetButton(element);
        });
    }

    static lockEmptyButtons() {
        ActionButton.emptyButtons.forEach((button) => {
            ActionButton.lock(button.id);
        });
    }

    lock() {
        if (isFinishedGame) this.addClass('gameOver');
        this.addClass('locked');
        this.removeAttribute(['onclick', 'name']);
    }
}

class PopupButton extends Button {}

class Game {
    constructor(matrix) {
        this._matrix = matrix;
        this._playing = true;
    }

    set playing(isPlaying) {
        this._playing = isPlaying;
    }

    get playing() {
        return this._playing;
    }

    isFinished() {
        return this.playing;
    }
}

const res = new Button('actionButton1');

console.log(res.element);
