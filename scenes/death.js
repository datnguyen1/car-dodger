add([
    text(`${args.score}`, 24),
]);

add([
    text("press spacebar to play again", 2.5),
    pos(0, 30),
]);

keyPress("space", () => {
    go("main");
});

add([
    text("Game by Dat Nguyen", 2.5),
    pos(0, 90),
]);