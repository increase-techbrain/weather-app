import { CloudSun, Droplet, MapPin, Wind } from "lucide-react";
import type { WeatherData } from "./types";

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <div className="w-full min-h-screen text-white">

     
      <div className="min-h-screen w-full  px-3 py-5 flex flex-col">

        <div className="flex flex-col items-center">
          <MapPin className="text-white/70" />

          <h1 className="text-4xl font-bold mt-2">
            {weather.name}
          </h1>

          <p className="text-white/60">
            {weather.country}
          </p>
        </div>

     
        <div className="flex flex-col items-center mt-8">

          <CloudSun size={120} className="text-white/90" />

          <h1 className="text-7xl font-extrabold mt-4">
            {weather.temp}°
          </h1>

          <p className="text-xl text-white/70 mt-1">
            {weather.condition}
          </p>

        </div>

   
        <div className="grid grid-cols-2 gap-4 mt-10">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
            <Droplet className="mx-auto text-blue-300" />
            <h1 className="text-2xl font-bold mt-2">
              {weather.humidity}%
            </h1>
            <p className="text-white/60 text-sm">Humidity</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
            <Wind className="mx-auto text-blue-300" />
            <h1 className="text-2xl font-bold mt-2">
              {weather.wind} km/h
            </h1>
            <p className="text-white/60 text-sm">Wind</p>
          </div>

        </div>

  
     

      </div>
    </div>
  );
};

export default WeatherCard;