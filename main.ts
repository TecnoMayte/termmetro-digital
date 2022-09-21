input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showLeds(`
        # # . # #
        # # # . .
        . . # . .
        . . # . .
        . . . # #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() * 9 / 5 + 32)
    basic.showLeds(`
        # # # # #
        # # # . .
        . . # # .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
