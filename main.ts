radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        showThatCarIsDark()
    }
})
function turnLeft () {
    radio.sendNumber(1)
}
function goForward () {
    radio.sendNumber(3)
}
input.onButtonPressed(Button.A, function () {
    turnLeft()
})
input.onGesture(Gesture.TiltLeft, function () {
    turnLeft()
})
function showThatCarIsDark () {
    basic.showString("It is scary it is dark!")
}
function turnRight () {
    radio.sendNumber(2)
}
input.onButtonPressed(Button.AB, function () {
    goForward()
})
input.onButtonPressed(Button.B, function () {
    turnRight()
})
input.onGesture(Gesture.TiltRight, function () {
    turnRight()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    lightupCar()
})
function lightupCar () {
    radio.sendNumber(4)
}
radio.setGroup(67)
