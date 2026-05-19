import { Routes, Route } from "react-router-dom"
import LandingPage from "./Component/LandingPage"
import Weather from "./Component/Weather"


function App (){
  return(
    <div>
      <Routes>
        <Route  path="/" element={  <LandingPage/>}/>
        <Route path="weather" element={<Weather/>}/>
      </Routes>

    
    

    </div>
  )
}

export  default  App