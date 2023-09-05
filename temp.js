function convertTemperature() {
    // Get the input value (temperature in Celsius)
    const celsiusInput = document.getElementById('celsius');
    const celsius = parseFloat(celsiusInput.value);

    // Check if the input is a valid number
    if (isNaN(celsius)) {
        alert('Please enter a valid number for Celsius temperature.');
        return;
    }

    // Convert Celsius to Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32;

    // Display the result
    const fahrenheitSpan = document.getElementById('fahrenheit');
    fahrenheitSpan.textContent = fahrenheit.toFixed(2);
}