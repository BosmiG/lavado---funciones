function CicloB () {
    for (let index = 0; index < 3; index++) {
        EntraAgua()
    }
    for (let index = 0; index < 3; index++) {
        Jabonar()
    }
    for (let index = 0; index < 3; index++) {
        Centrifugado()
    }
    for (let index = 0; index < 3; index++) {
        SaleAgua()
    }
    for (let index = 0; index < 3; index++) {
        Secado()
    }
}
function EntraAgua () {
    basic.showLeds(`
        . # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # . .
        . # # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # . .
        . # # . .
        . # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # . .
        . # # . .
        . # # . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . # # . .
        . # # . .
        . # # . .
        . # # . .
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
function CicloC () {
    EntraAgua()
    Centrifugado()
    Jabonar()
    SaleAgua()
    EntraAgua()
    Centrifugado()
    SaleAgua()
}
function Secado () {
    basic.showLeds(`
        . # . . .
        # . # . .
        . . . # .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . # . #
        . # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . #
        . . . # .
        . . . . .
        `)
}
function Centrifugado () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . #
        . . . . #
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . #
        . . . . #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . #
        . . . . #
        . # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . #
        . . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # . # # #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # . . . .
        # . # # #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # . . .
        # . # # #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # . .
        # . # # #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # .
        # . # # #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # # #
        # . # . #
        # . . . #
        # # # # #
        `)
}
function SaleAgua () {
    basic.showLeds(`
        . . # . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function CicloA () {
    EntraAgua()
    Centrifugado()
    SaleAgua()
    Secado()
}
function Jabonar () {
    basic.showLeds(`
        . . . # .
        . . # . #
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . #
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . # . #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        `)
    basic.showLeds(`
        . # . . .
        # . # . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # . # . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        # . # . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `)
}
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        CicloB()
    }
    while (input.buttonIsPressed(Button.B)) {
        CicloC()
    }
    while (input.buttonIsPressed(Button.AB)) {
        CicloA()
    }
})
