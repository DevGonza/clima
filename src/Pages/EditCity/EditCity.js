import React from 'react'
import { Link } from 'react-router-dom';
import FormEditCity from '../../Components/FormEditCity/FormEditCity'

const EditCity = () => {
  return (
    <div className='bg-dark bg-gradient'>
      <div className='justify-content-start ms-2' style={{width:"15%"}}>
        <Link to={"/settings"}><button type="button" className="btn btn-light fw-bold text-uppercase my-2 mx-2"><i className="bi bi-arrow-left me-2"></i>back</button></Link>
      </div>
      <div>
        <FormEditCity />
      </div>  
    </div>  
  )
}

export default EditCity