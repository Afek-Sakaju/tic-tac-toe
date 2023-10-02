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

const BOT_TURN_SIGN = 'o';
const PLAYER_TURN_SIGN = 'x';

const BOT_TURN_TEXT = `Its The AI's Move ( ${BOT_TURN_SIGN.toUpperCase()} )`;
const PLAYER_TURN_TEXT = `Its Your Move ( ${PLAYER_TURN_SIGN.toUpperCase()} )`;

const WON_GAME_SOUND = 'won-game';
const TIE_GAME_SOUND = 'tie-game';
