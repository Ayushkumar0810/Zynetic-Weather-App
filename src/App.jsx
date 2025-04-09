import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "3be85237341116731fca8243b9d02f42";

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

      );
      const data = await res.json();
      if (res.ok) {
        setWeather(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to fetch weather.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-indigo-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <SearchBar onSearch={fetchWeather} />
        {loading && <p className="text-center text-white">Loading...</p>}
        {error && <ErrorMessage message={error} />}
        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}

export default App;
