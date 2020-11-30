while (true) {
    if (input.temperature(TemperatureUnit.Fahrenheit) < 80) {
        light.setAll(light.rgb(0, 100, 150))
    } else {
        light.setAll(light.rgb(250, 0, 0))
    }
    
}
