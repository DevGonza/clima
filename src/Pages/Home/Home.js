import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import Searcher from '../../Components/Searcher/Searcher'
import { Context } from '../../Store/AppContext'
import './Home.css'

const Home = () => {
    const {city, buscador} = useContext(Context)
    
  return (
    <>
        <div><Searcher /></div>
        <div className='container justify-content-center my-5'>
            {
             buscador.length > 0 ?
             buscador.map(city => (
             <Card key={city.id} {...city} movies={city} />
             ))
             :
            city.length > 0 ?
            city.map(city => (
            <Card key={city.id} {...city} cities={city} />
            ))
            :
            <div className='container mb-4 text-success '>
                <div className='d-flex justify-content-center'>
                    <strong>Loading...</strong>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className="spinner-border d-flex " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
            }
        </div>
    </>
  )
}

export default Home