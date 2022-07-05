let time = 0
loops.everyInterval(1000, function () {
    basic.showString("" + (time))
})
loops.everyInterval(600000, function () {
    time += -1
})
loops.everyInterval(3600000, function () {
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    time = 6
})
