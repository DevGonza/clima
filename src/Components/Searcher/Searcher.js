import React, { useContext } from 'react'
import { Context } from '../../Store/AppContext'

const Searcher = () => {
  const {search, setSearch} = useContext(Context)
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Sunshine APP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
          <form className="d-flex w-50" role="search">
            <input className="form-control me-2" type="search" placeholder="Search city" value={search} onChange={(e)=>setSearch(e.target.value)} aria-label="Search"/>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Searcher