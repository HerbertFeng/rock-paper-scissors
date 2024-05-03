input.onButtonPressed(Button.A, function () {
    x += 1
    if (x == 4) {
        x = 1
    }
    if (x == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . # # # #
            `)
        basic.pause(200)
        basic.clearScreen()
    }
    if (x == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # # # .
            . # # # .
            `)
        basic.pause(200)
        basic.clearScreen()
    }
    if (x == 3) {
        basic.showLeds(`
            . . # . .
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            `)
        basic.pause(200)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (x == y) {
        basic.showString("Draw")
    }
    if (y == 2 && x == 1) {
        basic.showString("P1")
    }
    if (y == 3 && x == 2) {
        basic.showString("P1")
    }
    if (y == 1 && x == 3) {
        basic.showString("P1")
    }
    if (x == 3 && y == 2) {
        basic.showString("P2")
    }
    if (x == 1 && y == 3) {
        basic.showString("P2")
    }
    if (x == 2 && y == 1) {
        basic.showString("P2")
    }
})
input.onButtonPressed(Button.B, function () {
    y += 1
    if (y == 4) {
        y = 1
    }
    if (y == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . # # # #
            `)
        basic.pause(200)
        basic.clearScreen()
    }
    if (y == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # # # .
            . # # # .
            `)
        basic.pause(200)
        basic.clearScreen()
    }
    if (y == 3) {
        basic.showLeds(`
            . . # . .
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            `)
        basic.pause(200)
        basic.clearScreen()
    }
})
let y = 0
let x = 0
x = 0
y = 0
