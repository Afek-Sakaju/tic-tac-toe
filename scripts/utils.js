function placeToI(place) {
    switch (true) {
        case place <= 3:
            return 0;
        case place <= 6:
            return 1;
        default:
            return 2;
    }
}

function placeToJ(place) {
    return (place - 1) % 3;
}

function showCurrentTurn() {
    if (turn % 2) {
        playerOTurn.turnOn();
        playerXTurn.turnOff();
    } else {
        playerOTurn.turnOff();
        playerXTurn.turnOn();
    }
}
