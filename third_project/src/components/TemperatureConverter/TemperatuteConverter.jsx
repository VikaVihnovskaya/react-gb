import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import {useState} from "react";

function TemperatureConverter() {
  const [temperatureCelsius, setTemperatureCelsius] = useState('');
  const [temperatureFahrenheit, setTemperatureFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setTemperatureCelsius(value);
    setTemperatureFahrenheit((parseFloat(value) * 1.8 + 32).toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setTemperatureFahrenheit(value);
    setTemperatureCelsius(((parseFloat(value) - 32) / 1.8).toFixed(2));
  };

  return (
      <div>
        <h2 className="title">Введите температуру для конвертации</h2>
        <div className="temperatureConverter">
          <div className="textField" style={{padding:5}}>
            <TextField
                label="Градусы Цельсия"
                variant="outlined"
                type="number"
                value={temperatureCelsius}
                onChange={handleCelsiusChange}
            />
          </div>
          <div className="textField" style={{padding:5}}>
            <TextField
                label="Градусы Фаренгейта"
                variant="outlined"
                type="number"
                value={temperatureFahrenheit}
                onChange={handleFahrenheitChange}
            />
          </div>
        </div>
        <div className="button">
          <Button variant="contained" color="primary" style={{ margin: 10 }} onClick={() => {
            setTemperatureCelsius('');
            setTemperatureFahrenheit('');
          }}>Сбросить</Button>
        </div>
      </div>
  )
}


export default TemperatureConverter;