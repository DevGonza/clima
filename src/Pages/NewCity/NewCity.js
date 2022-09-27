import React from 'react'
import { Link } from 'react-router-dom';
import FormNewCity from '../../Components/FormNewCity/FormNewCity'

export const NewCity = () => {
  return (
    <>
      <div className='justify-content-start mt-2 ms-2' style={{width:"10%"}}>
        <Link to={"/settings"}><button type="button" className="btn btn-secondary w-50 d-flex justify-content-start"><i className="bi bi-arrow-left me-2"></i>Back</button></Link>
      </div>
      <FormNewCity />
    </>
    
  )
}
export default NewCity