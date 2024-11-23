import styles from "./App.module.css"
import Form from "./components/form/Form"
import WeatherDetails from "./components/weatherDetails/WeatherDetails"
import useWeather from "./hooks/useWeather"


function App() {

  const {fetchWeather, weather, hasWeatherData} = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de Temperatura</h1>

      <section className={styles.container}>
          <Form 
            fetchWeather={fetchWeather}
          />
          {hasWeatherData && 
            <WeatherDetails 
              weather={weather}
            />
          }
          
      </section>

    </>
  )
}

export default App
