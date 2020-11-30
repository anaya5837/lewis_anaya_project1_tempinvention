while True:
    if input.temperature(TemperatureUnit.FAHRENHEIT) < 80:
        light.set_all(light.rgb(0, 100, 150))
    else:
        light.set_all(light.rgb(250, 0,0))
