import React, { useContext } from 'react'
import { Context } from '../../Store/AppContext'

const FormEditCity = () => {
  const {city, handleChange, sendData} = useContext(Context)

  return (
    <form className='container rounded py-3 pt-3 bg-success bg-gradient' style={{width:"75%"}}>
      <div className="mb-3">
        <select className="form-select text-center text-capitalize" aria-label="Default select example" name="city" onChange={handleChange} required>
          <option value="">Select city</option>
          {city.map((name) => {return <option key={name.id}>{name.city}</option>})}
        </select>
      </div>
      <div className="mb-3 w-50">
        <label htmlFor="mondayForm" className="form-label text-uppercase pb-1 fw-bolder" >monday</label>
        <input type="date" id="mondayForm" name="monday" onChange={handleChange} min="1920-01-01" className="form-control form-control w-50"  required/>
      </div>
      <div className="row g-3 mb-2">
        <div className="col-md-3">
          <label htmlFor="tempMinMonday" className="form-label text-capitalize">temperature min</label>
          <input type="number" className="form-control" id="tempMinMonday" name="monday_min" onChange={handleChange} placeholder="°C" required/>
        </div>
        <div className="col-md-3 mb-2">
          <label htmlFor="tempMaxMonday" className="form-label text-capitalize">temperature max</label>
          <input type="number" className="form-control" id="tempMaxMonday" name="monday_max" onChange={handleChange} placeholder="°C" required/>
        </div>        
        <div className="col-md-6 mb-5">
          <p className="form-label text-capitalize">Selec forecast image </p>
            <select className="form-select text-center text-capitalize" aria-label="Default select example" name="monday_img" onChange={handleChange} required>
              <option value="">Select forecast image</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/1n.svg">clear nigth</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/6n.svg">rainy night</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/2n.svg">partly cloudy Nigth  </option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/1.svg">clear day </option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/6.svg">rainy day</option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/2.svg">partly cloudy day</option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/4n.svg">cloudy day</option> 
            </select>
        </div>
      </div>
      <div className="mb-3 w-50">
        <label htmlFor="tuesdayForm" className="form-label text-uppercase pb-1 fw-bolder">tuesday</label>
        <input type="date" id="tuesdayForm" min="1920-01-01" className="form-control form-control w-50" name="tuesday" onChange={handleChange} required/>
      </div>
      <div className="row g-3 mb-2">
        <div className="col-md-3">
          <label htmlFor="tempMintuesday" className="form-label text-capitalize" >temperature min</label>
          <input type="number" className="form-control" id="tempMintuesday" name="tuesday_min" onChange={handleChange} placeholder="°C" required/>
        </div>
        <div className="col-md-3 mb-2">
          <label htmlFor="tempMaxtuesday" className="form-label text-capitalize">temperature max</label>
          <input type="number" className="form-control" id="tempMaxtuesday" name="tuesday_max" onChange={handleChange} placeholder="°C" required/>
        </div>        
        <div className="col-md-6 mb-5">
        <p className="form-label text-capitalize">Selec forecast image </p>
            <select className="form-select text-center text-capitalize" aria-label="Default select example" name="tuesday_img" onChange={handleChange} required>
              <option value="">Select forecast image</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/1n.svg">clear nigth</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/6n.svg">rainy night</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/2n.svg">partly cloudy Nigth  </option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/1.svg">clear day </option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/6.svg">rainy day</option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/2.svg">partly cloudy day</option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/4n.svg">cloudy day</option> 
            </select>
        </div>
      </div>
      <div className="mb-3 w-50">
        <label htmlFor="wednesday" className="form-label text-uppercase pb-1 fw-bolder">wednesday</label>
        <input type="date" id="wednesday" min="1920-01-01" className="form-control form-contro w-50" name="wednesday" onChange={handleChange} required/>
      </div>
      <div className="row g-3 mb-2">
        <div className="col-md-3">
          <label htmlFor="wednesdaymin" className="form-label text-capitalize" >temperature min</label>
          <input type="number" className="form-control" id="wednesdaymin" placeholder="°C" name="wednesday_min" onChange={handleChange} required/>
        </div>
        <div className="col-md-3 mb-2">
          <label htmlFor="inputPassword4" className="form-label text-capitalize">temperature max</label>
          <input type="number" className="form-control" id="inputPassword4" placeholder="°C" name="wednesday_max" onChange={handleChange} required/>
        </div>        
        <div className="col-md-6 mb-5">
        <p className="form-label text-capitalize">Selec forecast image </p>
            <select className="form-select text-center text-capitalize" aria-label="Default select example" name="wednesday_img" onChange={handleChange} required>
              <option value="">Select forecast image</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/1n.svg">clear nigth</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/6n.svg">rainy night</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/2n.svg">partly cloudy Nigth  </option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/1.svg">clear day </option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/6.svg">rainy day</option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/2.svg">partly cloudy day</option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/4n.svg">cloudy day</option> 
            </select>
        </div>
      </div>
      <div className="mb-3 w-50">
        <label htmlFor="thursday" className="form-label text-uppercase pb-1 fw-bolder">thursday</label>
        <input type="date" id="thursday" min="1920-01-01" className="form-control form-control w-50" name="thursday" onChange={handleChange} required/>
      </div>
      <div className="row g-3 mb-2">
        <div className="col-md-3">
          <label htmlFor="thursdaymin" className="form-label text-capitalize">temperature min</label>
          <input type="number" className="form-control" id="thursdaymin" placeholder="°C" name="thursday_min" onChange={handleChange} required/>
        </div>
        <div className="col-md-3 mb-2">
          <label htmlFor="thursdaymax" className="form-label text-capitalize">temperature max</label>
          <input type="number" className="form-control" id="thursdaymax" placeholder="°C" name="thursday_max" onChange={handleChange} required/>
        </div>        
        <div className="col-md-6 mb-5">
        <p className="form-label text-capitalize">Selec forecast image </p>
            <select className="form-select text-center text-capitalize" aria-label="Default select example" name="thursday_img" onChange={handleChange} required>
              <option value="">Select forecast image</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/1n.svg">clear nigth</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/6n.svg">rainy night</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/2n.svg">partly cloudy Nigth  </option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/1.svg">clear day </option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/6.svg">rainy day</option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/2.svg">partly cloudy day</option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/4n.svg">cloudy day</option> 
            </select>
        </div>
      </div>
      <div className="mb-3 w-50">
        <label htmlFor="friday" className="form-label text-uppercase pb-1 fw-bolder">friday</label>
        <input type="date" id="friday" min="1920-01-01" className="form-control form-control w-50" name="friday" onChange={handleChange} required/>
      </div>
      <div className="row g-3 mb-2">
        <div className="col-md-3">
          <label htmlFor="fridaymin" className="form-label text-capitalize">temperature min</label>
          <input type="number" className="form-control" id="fridaymin" placeholder="°C" name="friday_min" onChange={handleChange} required/>
        </div>
        <div className="col-md-3 mb-2">
          <label htmlFor="fridaymax" className="form-label text-capitalize">temperature max</label>
          <input type="number" className="form-control" id="fridaymax" placeholder="°C" name="friday_max" onChange={handleChange} required/>
        </div>       
        <div className="col-md-6 mb-5">
        <p className="form-label text-capitalize">Selec forecast image </p>
            <select className="form-select text-center text-capitalize" aria-label="Default select example" name="friday_img" onChange={handleChange} required>
              <option value="">Select forecast image</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/1n.svg">clear nigth</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/6n.svg">rainy night</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/2n.svg">partly cloudy Nigth  </option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/1.svg">clear day </option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/6.svg">rainy day</option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/2.svg">partly cloudy day</option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/4n.svg">cloudy day</option> 
            </select>
        </div>
      </div>
      <div className="mb-3 w-50">
        <label htmlFor="saturday" className="form-label text-uppercase pb-1 fw-bolder">saturday</label>
        <input type="date" id="saturday" min="1920-01-01" className="form-control form-control w-50"  name="saturday" onChange={handleChange} required/>
      </div>
      <div className="row g-3 mb-2">
        <div className="col-md-3">
          <label htmlFor="saturdaymin" className="form-label text-capitalize">temperature min</label>
          <input type="number" className="form-control" id="saturdaymin" placeholder="°C" name="saturday_min" onChange={handleChange} required/>
        </div>
        <div className="col-md-3 mb-2">
          <label htmlFor="saturdaymax" className="form-label text-capitalize">temperature max</label>
          <input type="number" className="form-control" id="saturdaymax" placeholder="°C" name="saturday_max" onChange={handleChange} required/>
        </div>        
        <div className="col-md-6 mb-5">
        <p className="form-label text-capitalize">Selec forecast image </p>
            <select className="form-select text-center text-capitalize" aria-label="Default select example" name="saturday_img" onChange={handleChange} required>
              <option value="">Select forecast image</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/1n.svg">clear nigth</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/6n.svg">rainy night</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/2n.svg">partly cloudy Nigth  </option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/1.svg">clear day </option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/6.svg">rainy day</option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/2.svg">partly cloudy day</option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/4n.svg">cloudy day</option> 
            </select>
        </div>
      </div>
      <div className="mb-3 w-50">
        <label htmlFor="sunday" className="form-label text-uppercase pb-1 fw-bolder">sunday</label>
        <input type="date" id="sunday" min="1920-01-01" className="form-control form-control w-50" name="sunday" onChange={handleChange} required/>
      </div>
      <div className="row g-3 mb-2">
        <div className="col-md-3">
          <label htmlFor="sundaymin" className="form-label text-capitalize" >temperature min</label>
          <input type="number" className="form-control" id="sundaymin" placeholder="°C" name="sunday_min" onChange={handleChange} required/>
        </div>
        <div className="col-md-3 mb-2">
          <label htmlFor="sundaymax" className="form-label text-capitalize">temperature max</label>
          <input type="number" className="form-control" id="sundaymax" placeholder="°C" name="sunday_max" onChange={handleChange} required/>
        </div>        
        <div className="col-md-6 mb-5">
        <p className="form-label text-capitalize">Selec forecast image </p>
            <select className="form-select text-center text-capitalize" aria-label="Default select example" name="sunday_img" onChange={handleChange} required>
              <option value="">Select forecast image</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/1n.svg">clear nigth</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/6n.svg">rainy night</option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/2n.svg">partly cloudy Nigth  </option>
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/1.svg">clear day </option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/6.svg">rainy day</option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/2.svg">partly cloudy day</option> 
              <option value="https://www.meteored.com.ar/css/images/svg/newSymbols/4n.svg">cloudy day</option> 
            </select>
        </div>
      </div>
      <button type="button" className="btn btn-dark" onClick={sendData}>Submit</button>
    </form>
  )
}

export default FormEditCity