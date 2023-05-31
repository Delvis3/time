import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Weather from './components/Weather';
import Loader from './components/loader';
const bgimages = {
  "10n" : "/images/rain.jpg",
  "03n" : "/images/coulds.jpg"
}
function App() {
  const [weatherCity, setWeatherCity] = useState(null)
  const city = (e) =>{
    const city = e.target.city.value
    console.log(city);
    const API_KEY ="d43cb3599950195fdb2691908ed3c724";
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    console.log(URL);
  }



  const [weatherInfo, setWeatherInfo] = useState(null) 
 console.log(weatherInfo);

  const success= (pos) => {
   const lat =  pos.coords.latitude;
   const lon = pos.coords.longitude;
   const API_KEY ="d43cb3599950195fdb2691908ed3c724";

   const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
   console.log(URL);

   axios.get(URL)
       .then(({data}) =>setWeatherInfo(data))
       .catch((err) => console.log(err))
  }

 useEffect(() => {
  navigator.geolocation.getCurrentPosition(success)
 },[])
  return (
    // aca intente hacerle cambiar el fondo de noche a dia usando la propiedad sunset y sunnrise comparadolo con dt con un renderisado condicional como en el loadConfigFromFile, pero no pude
   <main className='bg-[url("/images/sun.jpg")] bg-opacity-40 bg-cover bg-center  min-h-screen  text-black flex justify-center items-center p-2 font-princpal-font'>
  {
   weatherInfo ? <Weather weatherInfo={weatherInfo}/> : <Loader/>
  }
    </main>
  )
}

export default App
