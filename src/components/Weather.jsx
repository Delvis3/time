import { useState } from "react"
import { kelvinToCelsius, kelvinToFahrenheit } from "./utils/temp"

const Weather = ({weatherInfo}) => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e.target.city.value)
    }

    const [isCelsius, setIsCelsius] = useState(true)
    
    const handleChangeTemp = () => {
        setIsCelsius(!isCelsius)
    }
    
    // para ver si nos llega la informacion
    // console.log(weatherInfo);
    return( 
        <section className="text-center grid gap-6">
        <h1 className="font-bold tex-4xl">{weatherInfo?.name}, {weatherInfo?.sys.country}</h1>
        
            <section className="grid gap-4 sm:grid-cols-[1fr_auto]"> 
            {/* ariba  */}
            <article className="bg-white/20 p-2 rounded-3xl grid grid-cols-2 items-center">
             <h3 className="col-span-2 capitalize">{weatherInfo?.weather[0].description}</h3>
             <span className="text-4xl">{isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToFahrenheit(weatherInfo?.main.temp)}</span>
             <div><img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@2x.png`} alt=""/></div>
            </article>
                {/* abajo */}
            <section className="bg-white/20 p-4 rounded-3xl justify-items-center grid grid-cols-3 sm:grid-cols-1 sm:items-center">
                <article className="flex gap 2 sm:item-center">
                <div><img src="/images/wind.png" alt=""/></div>
                <span>{weatherInfo?.wind.speed}m/s</span>
                </article>
    
                <article className="flex gap 2 sm:ITEN">
                <div><img src="/images/humidity.png" alt=""/></div>
                <span>{weatherInfo?.main.humidity}%</span>
                </article>
    
                <article className="flex gap 2 sm:ITEN">
                <div><img src="/images/pressure.png" alt=""/></div>
                <span>{weatherInfo?.main.pressure}hPa</span>
                </article>
            </section>
     </section>
    
     <button className="bg-black/50 text-white  p-2 w-auto rounded-3xl" onClick={handleChangeTemp}>Change ºK/ºC</button>
     {/*
     aqui hice el imput y recibi y mostre los datos en consola pero no pude incluirlos en la url y renderizar con los datos de la nueva cuidad
     <section>
        <form onSubmit={handleSubmit} className="max-w-max mx-auto">
        <div className="flex rounded-3xl overflow-hidden">
          <input id="city" type="text" placeholder="Search to city..." className="text-black outline-none px-2"></input>
          <button className="bg-white/80 p-2">Search</button>
          </div>
        </form>
     </section> */}
        </section>
    )
}
export default Weather