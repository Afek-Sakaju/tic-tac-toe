const STYLE_CLASSES = Object.freeze({
  WINNER_CELL: 'winning-cell',
  HIDDEN: 'hidden',
  LOCKED_CELL: 'locked',
  PLACEHOLDER_CELL: 'placeholder-cell',
  BOARD_CELL: 'game-board-cell',
  BOARD_CELL_CONTENT: 'game-board-cell-content',
});

const ELEMENTS_IDS = Object.freeze({
  GAME_BOARD: 'game-board',
  SOUND_BUTTON: 'sound-btn',
  PLAYER_SCORE: 'player-score',
  TIE_SCORE: 'tie-score',
  COMPUTER_SCORE: 'computer-score',
});

const GAME_CONDITIONS = Object.freeze({
  TIE: 'tie',
  VICTORY: 'victory',
  LOSS: 'loss',
});

const SOUND_FILE_NAMES = Object.freeze({
  GAME_TIE: 'tie-game',
  GAME_WON: 'won-game',
  GAME_START: 'start',
  UNMUTE: 'unmute',
  MUTE: 'mute',
});

const DISABLED_ATTR = 'disabled';

const O_SIGN = 'o';
const X_SIGN = 'x';

const BOT_TURN_SIGN = O_SIGN;
const PLAYER_TURN_SIGN = X_SIGN;

const BOT_TURN_TEXT = `Its The AI's Move ( ${BOT_TURN_SIGN.toUpperCase()} )`;
const PLAYER_TURN_TEXT = `Its Your Move ( ${PLAYER_TURN_SIGN.toUpperCase()} )`;
