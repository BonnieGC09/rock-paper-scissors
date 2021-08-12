input.onButtonPressed(Button.A, function () {
    game.addScore(1)
    basic.pause(500)
    basic.showNumber(game.score())
    if (game.score() == 10) {
        game.gameOver()
    }
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        soundExpression.spring.play()
        basic.showIcon(IconNames.Square)
    } else if (hand == 2) {
        soundExpression.twinkle.play()
        basic.showIcon(IconNames.SmallSquare)
    } else {
        soundExpression.giggle.play()
        basic.showIcon(IconNames.Scissors)
    }
})
let hand = 0
basic.showString("Press A if you win the round")
