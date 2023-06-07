document.getElementById('convert-button').addEventListener('click', convertTemperature);

function convertTemperature() {
  var temperatureInput = document.getElementById('temperature-input');
  var conversionType = document.getElementById('conversion-type').value;
  var convertedTemperatureInput = document.getElementById('converted-temperature');
  var errorMessage = document.getElementById('error-message');

  errorMessage.textContent = '';

  if (temperatureInput.value === '') {
    errorMessage.textContent = 'Please enter a temperature.';
    return;
  }

  var temperature = parseFloat(temperatureInput.value);

  if (isNaN(temperature)) {
    errorMessage.textContent = 'Invalid temperature. Please enter a valid number.';
    return;
  }

  var convertedTemperature;

  if (conversionType === 'celsius-to-fahrenheit') {
    convertedTemperature = (temperature * 9/5) + 32;
  } else if (conversionType === 'fahrenheit-to-celsius') {
    convertedTemperature = (temperature - 32) * 5/9;
  }

  convertedTemperatureInput.value = convertedTemperature.toFixed(2);
}
