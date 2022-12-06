'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*const game1 = new Game([
    [null, null, null],
    [null, null, null],
    [null, null, null],
]);*/
var Button = function () {
    function Button(id) {
        _classCallCheck(this, Button);

        this._id = id;
    }

    _createClass(Button, [{
        key: 'addClass',
        value: function addClass(classes) {
            if (!(classes instanceof Array)) classes = [classes];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var class1 = _step.value;

                    this.element.classList.add(class1);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'removeClass',
        value: function removeClass(classes) {
            if (!(classes instanceof Array)) classes = [classes];

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = classes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var class1 = _step2.value;

                    this.element.classList.remove(class1);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: 'addAttribute',
        value: function addAttribute(attributes) {
            if (!(attributes instanceof Array)) attributes = [attributes];

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = attributes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var attribute = _step3.value;
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = Object.entries(attribute)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var _step4$value = _slicedToArray(_step4.value, 2),
                                name = _step4$value[0],
                                value = _step4$value[1];

                            this.element.setAttribute(name, value);
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }, {
        key: 'removeAttribute',
        value: function removeAttribute(attributes) {
            if (!(attributes instanceof Array)) attributes = [attributes];

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = attributes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var attribute = _step5.value;

                    this.element.removeAttribute(attribute);
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }
        }
    }, {
        key: 'element',
        get: function get() {
            return document.getElementById(this._id);
        }
    }]);

    return Button;
}();

var ActionButton = function (_Button) {
    _inherits(ActionButton, _Button);

    function ActionButton() {
        _classCallCheck(this, ActionButton);

        var _this = _possibleConstructorReturn(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).call(this));

        _this._emptyButtons = document.querySelectorAll('[name="empty"]');
        _this._allButtons = document.querySelectorAll('.actionButton');
        return _this;
    }

    _createClass(ActionButton, [{
        key: 'lock',
        value: function lock() {
            if (isFinishedGame) this.addClass('gameOver');
            this.addClass('locked');
            this.removeAttribute(['onclick', 'name']);
        }
    }], [{
        key: 'toggleAll',
        value: function toggleAll() {
            var classes = {};
            classes.add = turn % 2 ? 'buttonO' : 'buttonX';
            classes.remove = turn % 2 ? 'buttonX' : 'buttonO';

            ActionButton.all.forEach(function (button) {
                if (!button.classList.contains('locked') || isFinishedGame) {
                    var b1 = new Button(button.id);

                    b1.removeClass(['defaultLogo', 'locked', 'winnerButton', classes.remove]);

                    b1.addClass(classes.add);
                }
            });
        }
    }, {
        key: 'resetAll',
        value: function resetAll() {
            ActionButton.all.forEach(function (element) {
                resetButton(element);
            });
        }
    }, {
        key: 'lockEmptyButtons',
        value: function lockEmptyButtons() {
            ActionButton.emptyButtons.forEach(function (button) {
                ActionButton.lock(button.id);
            });
        }
    }, {
        key: 'emptyButtons',
        get: function get() {
            return this._emptyButtons;
        }
    }, {
        key: 'allButtons',
        get: function get() {
            return this._allButtons;
        }
    }]);

    return ActionButton;
}(Button);

var PopupButton = function (_Button2) {
    _inherits(PopupButton, _Button2);

    function PopupButton() {
        _classCallCheck(this, PopupButton);

        return _possibleConstructorReturn(this, (PopupButton.__proto__ || Object.getPrototypeOf(PopupButton)).apply(this, arguments));
    }

    return PopupButton;
}(Button);

var Game = function () {
    function Game(matrix) {
        _classCallCheck(this, Game);

        this._matrix = matrix;
        this._playing = true;
    }

    _createClass(Game, [{
        key: 'isFinished',
        value: function isFinished() {
            return this.playing;
        }
    }, {
        key: 'playing',
        set: function set(isPlaying) {
            this._playing = isPlaying;
        },
        get: function get() {
            return this._playing;
        }
    }]);

    return Game;
}();

var res = new Button('actionButton1');

console.log(res.element);
