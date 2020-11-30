while (true) {
    if (input.temperature(TemperatureUnit.Fahrenheit) < 80) {
        light.setAll(light.rgb(0, 100, 150))
    } else if (70 > input.temperature(TemperatureUnit.Fahrenheit) && input.temperature(TemperatureUnit.Fahrenheit) > 40) {
        light.setAll(light.rgb(0, 250, 0))
    } else {
        light.setAll(light.rgb(0, 0, 250))
    }
    
}
