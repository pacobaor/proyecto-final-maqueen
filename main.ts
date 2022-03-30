radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (receivedNumber == 2) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(333)
music.playMelody("C5 A B G A F G E ", 120)
basic.showString("Hola")
