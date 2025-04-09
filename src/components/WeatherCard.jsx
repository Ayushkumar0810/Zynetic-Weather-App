export default function WeatherCard({ data }) {
    const { name, main, weather, wind } = data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div className="max-w-sm mx-auto mt-10 bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-6 text-white">
            <h2 className="text-3xl font-bold text-center mb-2">{name}</h2>

            <div className="flex flex-col items-center gap-2">
                <img src={iconUrl} alt={weather[0].description} className="w-24 h-24" />
                <p className="text-xl capitalize">{weather[0].description}</p>
                <p className="text-5xl font-extrabold">{main.temp}°C</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mt-6">
                <div className="bg-white/20 rounded-xl p-3 text-center">
                    <p className="text-gray-300">Humidity</p>
                    <p className="text-lg font-semibold">{main.humidity}%</p>
                </div>
                <div className="bg-white/20 rounded-xl p-3 text-center">
                    <p className="text-gray-300">Wind Speed</p>
                    <p className="text-lg font-semibold">{wind.speed} km/h</p>
                </div>
            </div>
        </div>
    );
}
