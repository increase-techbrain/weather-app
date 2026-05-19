import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import type { WeatherData } from "./types";

const Weather = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const [weather, setWeather] = useState<WeatherData>({
    name: "",
    country: "",
    temp: 0,
    condition: "",
    humidity: 0,
    wind: 0,
  });

  const API_KEY = "761c469a44b6569a68be35df78588e36";

  const getWeather = async () => {
    if (!city) return;

    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = response.data;

      setWeather({
        name: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        condition: data.weather[0].main,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      });
    } catch (error) {
      console.log(error);
      alert("City not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center px-4 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/sunset.jpg')" }}
    >
     
      <div className="absolute inset-0 bg-black/50" />

  
      <div className="relative w-[450px] bg-black/50 rounded-[30px] shadow-2xl p-6">

        <SearchBar
          city={city}
          setCity={setCity}
          getWeather={getWeather}
        />

       {loading ?(
        <h1 className="text-xl font-bold text-white">  Loading.......</h1>
      
       ): weather.name ?(
        <div className="w-full max-w-md">
          <WeatherCard weather={weather}/>

        </div>
       ):(
        < p  className="text-gray-300 text-center mt-6">Search  city to get Weather info</p>
       )}

      </div>
    </div>
  );
};

export default Weather;