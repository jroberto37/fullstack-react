import axios from "axios"
import { useEffect, useState } from "react"

const Weather = ({countrie}) => {
    const [weather, setWeather] = useState('')
    const weatherKey = 'cf750d6bd86d6a0650d0b74b99e57251'
    const hookWeather = () => { 
        axios 
            .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${countrie.latlng[0]}&lon=${countrie.latlng[1]}&exclude=alerts&appid=${weatherKey}`)
            .then( (response) => {
                setWeather(response.data)
            })
            .catch( (e)=>{
                console.log(`Something went wrong ${e}`)
            })
        }

    useEffect(hookWeather, [])

    //console.log(weather)

    if (typeof(weather) === "object"){
        return(
            <div>
                <h3>Weather in {countrie.name.common}</h3>
                <div>temperature {weather.current.temp - 273.15} Celcius</div>
                <div><img src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`} /></div>
                <div>wind {weather.current.wind_speed} m/s</div>
            </div>
        )
    }

    return(<></>)


}

export default Weather