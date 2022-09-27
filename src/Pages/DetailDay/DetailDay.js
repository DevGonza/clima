import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {  BASE_URL_TEMPERATURE } from '../../utils'
import CardDetail from '../../Components/CardDetail/CardDetail'


const DetailDay = () => {
  const [cityId, setCityId] = useState([])
  const {id_city,friday} = useParams()

  const apiCityId = async () => {
    const response = await axios.get(`${BASE_URL_TEMPERATURE}/${id_city}/${friday}`)
    setCityId(response.data.data[0])
    console.log(response.data.data[0])
  }
  
  useEffect(() => {
    apiCityId()
  }, [])

  return (
    <div className='mx-5 d-flex flex-wrap justify-content-between'>
      <CardDetail key={cityId.id} {...cityId} />
    </div>
   
  )
}

export default DetailDay


