function girarDerecha () {
    Rover.MotorRunDual(-50, 50)
    basic.pause(100)
    Rover.setALLRGB(Rover.colors(RoverColors.Yellow))
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Rover.MotorStopAll(MotorActions.Stop)
})
input.onButtonPressed(Button.A, function () {
    girarDerecha()
})
function girarIzquierda () {
    Rover.MotorRunDual(50, -50)
    basic.pause(100)
    Rover.setALLRGB(Rover.colors(RoverColors.Purple))
}
function avanzar () {
    Rover.MotorRunDual(255, 255)
    basic.pause(100)
    Rover.setALLRGB(Rover.colors(RoverColors.Red))
}
input.onButtonPressed(Button.AB, function () {
    avanzar()
})
input.onButtonPressed(Button.B, function () {
    girarIzquierda()
})
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
})
