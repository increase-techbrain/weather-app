import { CloudSun, Droplet, MapPin, Wind } from "lucide-react"

import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-sky-100">
      <nav className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-extrabold text-sky-900 ">SkyCast</h1>

           <button onClick={()=> navigate("/weather")} className="bg-blue-900/90 hover:bg-blue-800 text-white px-5 py-2 rounded-full hover:scale-105 duration-300 cursor-pointer">Get Started </button>

    
        
        
       
      </nav>
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="">
          <p className="px-4 py-2 rounded-full text-sm font-medium shadow bg-white inline-block">Live Weather Updates</p>

          <h1 className=" text-5xl md:text-6xl font-extrabold leading-tight mt-6 text-[#132c63]"> Weather  Forecasts</h1>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed"> Get accurate real-time weather forecasts from any city
            around the world with beautiful visuals and instant
            updates</p>

            <div className="flex gap-4 mt-6">
              <button className="bg-blue-900 text-white  rounded  hover:scale-105 duration-300 shadow-lg px-3 py-3">Explore Weather</button>

            <button className="bg-blue-100 text-blue-900 rounded shadow hover:scale-105 duration-300 px-3 py-1">Learn More</button>
               
            </div>

            <div className="flex gap-8 mt-12">
              <div>
                <h1 className="text-3xl font-bold text-sky-800/90">200+</h1>
                 <p className="text-gray-600">Cities Covered</p>
              </div>

              <div >
                <h1 className="text-3xl font-bold text-sky-800/90">24/7</h1>
                <p className="text-gray-600">Live Updates</p>

              </div>

              <div >
                <h1 className="text-3xl font-bold text-sky-800/90">99%</h1>
                <p className="text-gray-600">Accuracy</p>

              </div>
            </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[340px] bg-white rounded-4xl shadow-2xl p-6" >
            <div className="rounded-full px-4 py-3 bg-gray-200">
              <input type="text"   placeholder="search city....." className="bg-transparent outline-none w-full"/>


            </div >
             <div className="flex flex-col items-center mt-10">
             <MapPin className="text-gray-500"/>
             <h1 className="text-4xl font-bold mt-2 text-blue-950">Lagos</h1>
             <p className="text-gray-500">Nigeria</p>

             <CloudSun size={120} className="text-[#132c63] mt-6"/>
             <h1 className="text-6xl font-extrabold mt-6">  28°</h1>

             <p className="text-gray-500 text-xl mt-2">Cloudy</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-gray-200 rounded-2xl p-4 ">
              <Droplet className="text-blue-800"/>
              <h1 className="font-bold text-2xl mt-3">68%</h1>
              <p className="text-gray-500 text-sm">
                  Humidity
                </p>

            </div>
            <div className="bg-gray-200 rounded-2xl p-4 ">
              <Wind className="text-blue-800"/>
              <h1 className="font-bold text-2xl mt-3">5km/h</h1>
              <p className="text-gray-500 text-sm">
                  Wind speed
                </p>

            </div>
            

          </div>
            
          </div>
         

        </div>

      </div>

    </div>
  )
}

export default LandingPage