import styles from "./App.module.css"
import Form from "./components/form/Form"
import useWeather from "./hooks/useWeather"

function App() {

  const {fetchWeather} = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de Temperatura</h1>

      <section className={styles.container}>
          <Form 
            fetchWeather={fetchWeather}
          />
          <p>2</p>
      </section>

    </>
  )
}

export default App
