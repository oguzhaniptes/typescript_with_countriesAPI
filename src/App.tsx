import axios from "axios"
import { useEffect, useState } from "react"
import Country from "./components/Country"
import { CountryType } from "./types"

export default function App() {
    const [countries, setCountries] = useState<CountryType[]>([])
    const [loading, setLoading] = useState<boolean>(false)



    const getCountries = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get<CountryType[]>("https://restcountries.com/v3.1/all")
            setCountries(data)
        }
        catch {
            console.log("Error!")
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getCountries()
    }, [])

    console.log(countries);

    return (
        <div>
            <h1>
                Countries App with TypeScript
            </h1>

            {countries.map(country => {
                return (
                    <div>
                        <Country key={country.name.common} country={country}></Country>
                    </div>
                )
            })}


        </div>
    )
}