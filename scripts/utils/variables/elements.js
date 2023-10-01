const startGameButton = document.getElementById(ELEMENTS_IDS.START_BUTTON);
const toggleMuteButton = document.getElementById(ELEMENTS_IDS.SOUND_BUTTON);

const playerScoreDisplay = document.getElementById(ELEMENTS_IDS.PLAYER_SCORE);
const tieScoreDisplay = document.getElementById(ELEMENTS_IDS.TIE_SCORE);
const computerScoreDisplay = document.getElementById(
  ELEMENTS_IDS.COMPUTER_SCORE
);

const currentTurnStatusDisplay = document.getElementById(
  ELEMENTS_IDS.TURN_STATUS
);
const gameBoardMatrix = getInitializedGameBoardMatrix();
