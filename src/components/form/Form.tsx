import { useState } from "react";
import { countries } from "../../data/countries.ts";
import styles from "./Form.module.css"
import { SearchType } from "../../types/index.ts";
import Alert from "../alert/Alert.tsx";

type FormProps = {
    fetchWeather: () => void
}

export default function Form({fetchWeather}: FormProps) {

    const [search, setSearch] = useState<SearchType>({
        city: "",
        country: ""
    })

    const [alert, setAlert] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {

        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if(Object.values(search).includes('')){
            setAlert("Todos los campos son obligatorios")
            return
        }

        fetchWeather()

    }

  return (
    <>
        <form className={styles.form} onSubmit={handleSubmit}>
            {alert && <Alert>{alert}</Alert>}
            <div className={styles.field}>
                <label htmlFor="city">Ciudad: </label>
                <input onChange={handleChange} value={search.city} type="text" id="city" name="city" placeholder="Ciudad"/>
            </div>

            <div className={styles.field}>
                <label htmlFor="country">Pais: </label>
                <select id="country" value={search.country} name="country" onChange={handleChange}>
                    <option value="">-- Seleccione un país --</option>
                    {
                        countries.map(country => (
                            <option value={country.code} key={country.code}>{country.name}</option>
                        ))
                    }
                </select>
            </div>

            <input className={styles.submit} type="submit" value='Consultar clima'/>

        </form>
    
    </>
  )
}