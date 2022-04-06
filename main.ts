input.onButtonPressed(Button.A, function () {
    radio.setFrequencyBand(83)
    radio.sendValue("controled", 4)
})
radio.setGroup(60)
