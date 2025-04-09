import { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() !== "") {
            onSearch(city);
            setCity("");
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-md text-white mt-10">
            <h2 className="text-3xl font-bold mb-2 text-center">🌤️ Welcome</h2>
            <p className="text-sm text-center mb-6">Zynetic Weather App</p>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 items-center justify-center"
            >
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    className="w-full sm:w-2/3 p-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-6 py-3 rounded-lg w-full sm:w-auto"
                >
                    Search
                </button>
            </form>
        </div>
    );
}
