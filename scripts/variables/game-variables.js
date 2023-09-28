/* eslint-disable prefer-const */
const startGameButton = document.getElementById(ELEMENTS_IDS.START_BUTTON);
const currentTurnStatusDisplay = document.getElementById(
  ELEMENTS_IDS.TURN_STATUS
);
const toggleMuteButton = document.getElementById(ELEMENTS_IDS.SOUND_BUTTON);

const gameBoardMatrix = getInitializedGameBoardMatrix();

let currentTurnSign = BOT_TURN_SIGN;
let isGameFinished = true;
let isSoundMuted = false;
