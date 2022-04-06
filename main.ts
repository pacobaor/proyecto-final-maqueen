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
    if (receivedNumber == 4) {
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    }
    if (receivedNumber == 5) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    }
    if (receivedNumber == 6) {
        seguir_la_línea()
    }
})
function seguir_la_línea () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorStop(maqueen.Motors.M2)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorStop(maqueen.Motors.M1)
    }
}
radio.setGroup(333)
music.playMelody("C5 A B G A F G E ", 120)
basic.showString("Hola")
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 6) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.No)
        radio.sendNumber(7)
    }
})
