import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Store/AppContext'

const Searcher = () => {
  const {search, setSearch} = useContext(Context)
  return (
    <nav className="navbar navbar-expand-lg bg-light border">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Sunshine APP</a>
        <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarSupportedContent">
          <form className='w-50'  role="search">
            <input className="form-control me-2 text-center" type="search" placeholder="Search city" value={search} onChange={(e)=>setSearch(e.target.value)} aria-label="Search"/>
          </form>
        </div>
      </div>
      <div className="collapse navbar-collapse d-flex justify-content-end me-4">
        <Link to='/settings'><button type='button' className='btn btn-secondary ms-5'><i className="bi bi-gear-wide-connected"></i></button></Link>
      </div>
    </nav>
  )
}

export default Searcher