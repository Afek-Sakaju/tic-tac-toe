function showCurrentTurn() {
    if (turn % 2) {
        playerOTurn.turnOn();
        playerXTurn.turnOff();
    } else {
        playerOTurn.turnOff();
        playerXTurn.turnOn();
    }
}
