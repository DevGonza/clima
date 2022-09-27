import React from 'react'
import { Link } from 'react-router-dom';


const Settings = () => {
  return (
    <div className='bg-dark bg-gradient'>
      <div>
        <Link to={"/"}><button type="button" className="btn btn-light fw-bold text-uppercase my-2 mx-2"><i className="bi bi-house-door me-2"></i>home</button></Link>
      </div>
      <div className='d-flex justify-content-around align-items-center flex-wrap' style={{height:"100vh"}}>
        <div>
          <Link to={"/editcity"} className='w-100 justify-content-center'><button type="button" className="btn btn-success fs-3" style={{width: "20rem", height:"5rem"}}>Modify weather city</button></Link>
        </div>
        <div>
          <Link to={"/edithourly"} className='w-100'><button type="button" className="btn btn-success fs-3" style={{width: "20rem", height:"5rem"}}>Modify weather detail</button></Link>
        </div>
        <div>
          <Link to={"#"} className='w-100'>
            <button type="button" className="btn btn-success fs-3 position-relative" style={{width: "20rem", height:"5rem"}}>New City<span className="position-absolute top-100 start-50 translate-middle badge rounded-pill bg-danger">COMING SOON<span className="visually-hidden"></span></span></button>
          </Link>
        </div>
      </div>
    </div>
    
  )
}

export default Settings