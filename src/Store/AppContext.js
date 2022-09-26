import { useState, createContext, useEffect } from "react";
import { BASE_URL } from '../utils';
import axios from 'axios'

export const Context = createContext(null)
const UserProvider = ({ children }) => {
    const [city, setCity] = useState([])
    const [search, setSearch] = useState('')
    
    const apiCity = async () => {
        const response = await axios.get(`${BASE_URL}`)
        setCity(response.data.data)
        console.log(response.data.data)
    }
    const buscador = city.filter(cities=> cities.city.toLowerCase().includes(search.toLocaleLowerCase()))



    useEffect(() => {
        apiCity()
    }, [])

    return (
        <Context.Provider value={{ 
            apiCity,
            city,
            setCity,
            search,
            setSearch,
            buscador
        }}>

            {children}
        </Context.Provider>
    )
}

export default UserProvider