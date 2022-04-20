input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("back")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("left")
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("stop")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("honk")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("foreword")
})
basic.forever(function () {
    radio.setGroup(255)
})
