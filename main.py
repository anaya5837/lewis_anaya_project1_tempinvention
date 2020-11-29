while True:
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 70:
        light.set_all(light.rgb(250, 0, 0))
    elif 70 > input.temperature(TemperatureUnit.FAHRENHEIT) > 40:
        light.set_all(light.rgb(0, 250, 0))
    else:
        light.set_all(light.rgb(0, 0, 250))
