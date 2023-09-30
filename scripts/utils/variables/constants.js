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
  START_BUTTON: 'start-btn',
  TURN_STATUS: 'turn-status-info',
  SOUND_BUTTON: 'sound-btn',
});

const BOT_TURN_SIGN = 'o';
const PLAYER_TURN_SIGN = 'x';

const BOT_TURN_TEXT = `Next Move: \n ${BOT_TURN_SIGN.toUpperCase()} - Bot`;
const PLAYER_TURN_TEXT = `Next Move: \n ${PLAYER_TURN_SIGN} - Player`;
