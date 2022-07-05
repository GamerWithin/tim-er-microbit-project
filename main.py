start = 0
time = 0

def on_button_pressed_a():
    global start
    start = input.running_time()
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_logo_released():
    global time
    time = input.running_time() - start
    basic.show_number(Math.idiv(time, 1000))
input.on_logo_event(TouchButtonEvent.RELEASED, on_logo_released)
