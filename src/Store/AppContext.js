import { useState, createContext, useEffect } from "react";
import { BASE_URL, BASE_URL_TEMPERATURE } from '../utils';
import axios from 'axios'

export const Context = createContext(null)
const UserProvider = ({ children }) => {
    const [city, setCity] = useState([])
    const [search, setSearch] = useState('')
    
    const apiCity = async () => {
        const response = await axios.get(`${BASE_URL}`)
        setCity(response.data.data)
    }


    const [putCity, setPutCity] = useState({
        city:"",
        monday:"",
        tuesday:"",
        wednesday:"",
        thursday:"",
        friday:"",
        saturday:"",
        sunday:"",
        monday_max:"",
        monday_min:"",
        tuesday_max:"", 
        tuesday_min:"", 
        wednesday_max:"",
        wednesday_min:"",
        thursday_max:"",
        thursday_min:"",
        friday_max:"",
        friday_min:"",
        saturday_max:"",
        saturday_min:"",
        sunday_max:"",
        sunday_min:"",
        monday_img:"",
        tuesday_img:"",
        wednesday_img:"",
        thursday_img:"",
        friday_img:"",
        saturday_img:"",
        sunday_img:"",

    })


    const handleChange = async (e) => {
        await setPutCity({
          ...putCity,
          [e.target.name]: e.target.value,
        });
      };
    
    const sendData = async () => { 
      const response = await axios.put(`${BASE_URL}/${putCity.city}`,putCity)
        if(response.data.error === "True"){
            alert(response.data.msg)
        }else{
            alert(response.data.msg)
        }
    };      


    const [putHourly, setputHourly] = useState({
        city :"",
        date_weather:"",
        Week_day:"",
        Twelve_AM:"",
        One_AM:"",
        Two_AM:"",
        Three_AM:"",
        Four_AM:"",
        Five_AM:"",
        Six_AM:"",
        Seven_AM:"",
        Eight_AM:"",
        Nine_AM:"",
        Ten_AM:"",
        Eleven_AM:"",
        Twelve_PM:"",
        One_PM:"",
        Two_PM:"",
        Three_PM:"",
        Four_PM:"",
        Five_PM:"",
        Six_PM:"",
        Seven_PM:"",
        Eight_PM:"",
        Nine_PM:"",
        Ten_PM:"",
        Eleven_PM:"",
        Forecast_Twelve_AM:"",
        Forecast_One_AM:"",
        Forecast_Two_AM:"",
        Forecast_Three_AM:"",
        Forecast_Four_AM:"",
        Forecast_Five_AM:"",
        Forecast_Six_AM:"",
        Forecast_Seven_AM:"",
        Forecast_Eight_AM:"",
        Forecast_Nine_AM:"",
        Forecast_Ten_AM:"",
        Forecast_Eleven_AM:"",
        Forecast_Twelve_PM:"",
        Forecast_One_PM:"",
        Forecast_Two_PM:"",
        Forecast_Three_PM:"",
        Forecast_Four_PM:"",
        Forecast_Five_PM:"",
        Forecast_Six_PM:"",
        Forecast_Seven_PM:"",
        Forecast_Eight_PM:"",
        Forecast_Nine_PM:"",
        Forecast_Ten_PM:"",
        Forecast_Eleven_PM:"",
        img_Twelve_AM:"",
        img_One_AM:"",
        img_Two_AM:"",
        img_Three_AM:"",
        img_Four_AM:"",
        img_Five_AM:"",
        img_Six_AM:"",
        img_Seven_AM:"",
        img_Eight_AM:"",
        img_Nine_AM:"",
        img_Ten_AM:"",
        img_Eleven_AM:"",
        img_Twelve_PM:"",
        img_One_PM:"",
        img_Two_PM:"",
        img_Three_PM:"",
        img_Four_PM:"",
        img_Five_PM:"",
        img_Six_PM:"",
        img_Seven_PM:"",
        img_Eight_PM:"",
        img_Nine_PM:"",
        img_Ten_PM:"",
        img_Eleven_PM:""

    })

    const handleChangeH = async (e) => {
        await setputHourly({
          ...putHourly,
          [e.target.name]: e.target.value,
        });
    };

    
    const sendDataH = async () => { 
       const response = await axios.put(`${BASE_URL_TEMPERATURE}/${putHourly.city}`,putHourly)
         if(response.data.error === "True"){
            alert(response.data.msg)
        }else{
            alert(response.data.msg)
        }
    }; 


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
            buscador,
            handleChange,
            handleChangeH,
            sendData,
            sendDataH
        }}>

            {children}
        </Context.Provider>
    )
}

export default UserProvider