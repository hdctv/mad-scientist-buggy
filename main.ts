bluetooth.onBluetoothConnected(function () {
    connected.showImage(0)
})
bluetooth.onBluetoothDisconnected(function () {
    waiting.showImage(0)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        forward.showImage(0)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 100)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        backward.showImage(0)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 100)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        left.showImage(0)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 50)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 50)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        right.showImage(0)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 50)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 50)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP || (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP || (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP || control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP))) {
        nobuts.showImage(0)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    }
})
let nobuts: Image = null
let right: Image = null
let left: Image = null
let backward: Image = null
let forward: Image = null
let connected: Image = null
let waiting: Image = null
waiting = images.createImage(`
    . # # # .
    # . . . #
    . . . # .
    . . # . .
    . . # . .
    `)
connected = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
forward = images.createImage(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
backward = images.createImage(`
    . . # . .
    . . # . .
    # . # . #
    . # # # .
    . . # . .
    `)
left = images.createImage(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
right = images.createImage(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
nobuts = images.createImage(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
waiting.showImage(0)
