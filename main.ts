radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        showThatCarIsDark()
    }
})
function turnLeft () {
    sendSignal(1)
}
function goForward () {
    sendSignal(3)
}
input.onButtonPressed(Button.A, function () {
    turnLeft()
})
function sendSignal (num: number) {
    radio.sendNumber(num)
    basic.showString("" + (num))
}
input.onGesture(Gesture.TiltLeft, function () {
    turnLeft()
})
function showThatCarIsDark () {
    basic.showIcon(IconNames.Pitchfork)
}
function turnRight () {
    sendSignal(2)
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
    sendSignal(4)
}
radio.setGroup(67)
