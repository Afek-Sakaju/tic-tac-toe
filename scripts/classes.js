/*const game1 = new Game([
    [null, null, null],
    [null, null, null],
    [null, null, null],
]);*/

class Button {
    constructor(id) {
        this._id = id;
        this._element = document.getElementById(this.id);
    }

    get element() {
        return this._element;
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
    static get all() {
        return document.querySelectorAll('.actionButton');
    }

    static toggleAll() {
        const classes = {};

        classes.add = turn % 2 ? 'buttonO' : 'buttonX';
        classes.remove = turn % 2 ? 'buttonX' : 'buttonO';

        ActionButton.all.forEach((button) => {
            if (!button.classList.contains('locked') || isFinishedGame) {
                removeClasses(button, [
                    'defaultLogo',
                    'locked',
                    'winnerButton',
                    classes.remove,
                ]);

                addClasses(button, classes.add);
            }
        });
    }

    static resetAll() {
        ActionButton.all.forEach((element) => {
            resetButton(element);
        });
    }

    static lock(id) {
        const button = new Button(id);

        if (isFinishedGame) button.addClass('gameOver');
        button.addClass('locked');
        button.removeAttribute(['onclick', 'name']);
    }

    static lockEmptyButtons() {
        const emptyButtons = document.querySelectorAll('[name="empty"]');

        emptyButtons.forEach((button) => {
            ActionButton.lock(button.id);
        });
    }

    constructor() {
        super();
    }
}

class PopupButton extends Button{
    
}

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
