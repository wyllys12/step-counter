input.onGesture(Gesture.Shake, function () {
    Step += 1
    led.stopAnimation()
})
let Step = 0
basic.forever(function () {
    basic.showNumber(Step)
})
