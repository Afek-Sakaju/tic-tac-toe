const STYLE_CLASSES = Object.freeze({
  BOARD_CELL_CONTENT: 'game-board-cell-content',
  BOARD_CELL: 'game-board-cell',
  HIDDEN: 'hidden',
  LOCKED_CELL: 'locked',
  PLACEHOLDER_CELL: 'placeholder-cell',
  WINNER_CELL: 'winning-cell',
});

const ELEMENTS_IDS = Object.freeze({
  BOARD_CELL: 'board-cell',
  COMPUTER_SCORE: 'computer-score',
  GAME_BOARD: 'game-board',
  PLAYER_SCORE: 'player-score',
  SOUND_BUTTON: 'sound-btn',
  TIE_SCORE: 'tie-score',
});

const GAME_CONDITIONS = Object.freeze({
  TIE: 'tie',
  VICTORY: 'victory',
  LOSS: 'loss',
});

const SOUND_NAMES = Object.freeze({
  X_SELECT: 'selection-sound-x',
  O_SELECT: 'selection-sound-o',
  GAME_TIE: 'tie-game',
  GAME_WON: 'won-game',
  GAME_START: 'start',
  UNMUTE: 'unmute',
  MUTE: 'mute',
});

const DISABLED_ATTR = 'disabled';

const O_SIGN = 'O';
const X_SIGN = 'X';

const BOT_TURN_SIGN = O_SIGN;
const PLAYER_TURN_SIGN = X_SIGN;

const BOT_TURN_TEXT = `Its The AI's Move ( ${BOT_TURN_SIGN} )`;
const PLAYER_TURN_TEXT = `Its Your Move ( ${PLAYER_TURN_SIGN} )`;
