import { Weather } from "../../types"

type WeatherDetailsProps = {
    weather: Weather
}

export default function WeatherDetails({weather}: WeatherDetailsProps) {
  return (
    <>

        <h2>Clima de: {weather.name}</h2>
    </>
  )
}
