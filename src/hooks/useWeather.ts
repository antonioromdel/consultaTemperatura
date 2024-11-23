import axios from "axios"
import { SearchType, Weather } from "../types"
import { useMemo, useState } from "react"

export default function useWeather() {

    const [weather, setWeather] = useState<Weather>({
        name: '',
        main: {
            temp: 0,
            temp_max: 0,
            temp_min: 0
        }

    })

    const fetchWeather = async (search : SearchType) => {

        const appID = import.meta.env.VITE_API_KEY
        
        try{
            
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appID}`
            const {data} = await axios(geoUrl)

            const lat = data[0].lat
            const lon = data[0].lon
            
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}`
            const {data: weatherResult} = await axios(weatherUrl)
            

            if(weatherResult) {
                setWeather(weatherResult)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const hasWeatherData = useMemo(() => weather.name , [weather])

    return {
        weather,
        fetchWeather,
        hasWeatherData

    }
}