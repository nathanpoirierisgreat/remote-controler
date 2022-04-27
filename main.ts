input.onButtonPressed(Button.A, function () {
    radio.setGroup(255)
})
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
radio.onReceivedString(function (receivedString) {
    if (receivedString == "close garage") {
        radio.sendString("close garage")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(8)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("foreword")
})
