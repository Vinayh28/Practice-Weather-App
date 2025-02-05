import { useState } from "react";
import "./styles.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!city) return setError("Please enter a city name");

    try {
      const response = await fetch(
        `http://localhost:5000/weather?city=${city}`
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setWeatherData(null);
      } else {
        setWeatherData(data.data);
        setError(null);
      }
    } catch (error) {
      setError(`Failed to fetch weather data ${error}`);
      setWeatherData(null);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Submit</button>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <p>City: {weatherData.city}</p>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Wind: {weatherData.wind} km/h</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
