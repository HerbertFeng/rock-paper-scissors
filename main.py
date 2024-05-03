def on_button_pressed_a():
    global x
    x += 1
    if x == 4:
        x = 1
    if x == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . # # # #
            """)
        basic.pause(200)
        basic.clear_screen()
    if x == 2:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # # # .
            . # # # .
            """)
        basic.pause(200)
        basic.clear_screen()
    if x == 3:
        basic.show_leds("""
            . . # . .
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            """)
        basic.pause(200)
        basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    if x == y:
        basic.show_string("Draw")
    if y == 2 and x == 1:
        basic.show_string("P1")
    if y == 2 and x == 1:
        basic.show_string("P1")
    if y == 1 and x == 3:
        basic.show_string("P1")
    if y == 3 and x == 2:
        basic.show_string("P1")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global x
    x += 1
    if x == 4:
        x = 1
    if x == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . # # # #
            """)
        basic.pause(200)
        basic.clear_screen()
    if x == 2:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # # # .
            . # # # .
            """)
        basic.pause(200)
        basic.clear_screen()
    if x == 3:
        basic.show_leds("""
            . . # . .
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            """)
        basic.pause(200)
        basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

y = 0
x = 0
x = 0
y = 0