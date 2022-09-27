import React, { useContext } from 'react'
import { Context } from '../../Store/AppContext'

const FormEditHourly = () => {
  const {city, handleChangeH, sendDataH} = useContext(Context)

  return (
    <form className='container rounded py-3 pt-3 bg-success bg-gradient'>
      <div className="mb-3">
        <select className="form-select text-center text-capitalize" aria-label="Default select example" name="city" onChange={handleChangeH} required>
          <option value="">Select city</option>
          {city.map((name) => {return <option key={name.id}>{name.city}</option>})}
        </select>
      </div>
      <div className='row g-2 justify-content-center text-center'>
      <div className="col-md-3 mb-3">
        <p className="form-label text-uppercase pb-1 fw-bolder">select the day to modify</p>
        <select className="form-select text-center text-capitalize" aria-label="Default select example" name="Week_day" onChange={handleChangeH} required>
          <option value="">Select day</option>
          <option >Monday</option>
          <option >Tuesday</option>
          <option >Wednesday</option>
          <option >Thursday</option>
          <option >Friday</option>
          <option >Saturday</option>
          <option >Sunday</option>
        </select>
      </div>
      <div className="col-md-3 mb-3">
        <label htmlFor="mondayForm" className="form-label text-uppercase pb-1 fw-bolder">Setup new day</label>
        <input type="date" id="mondayForm" name="date_weather" onChange={handleChangeH} min="1920-01-01" className="form-control form-control" required/>
      </div>
      </div>
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 00hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Twelve_AM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Twelve_AM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Twelve_AM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 01hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="One_AM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_One_AM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_One_AM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 02hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Two_AM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Two_AM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Two_AM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 03hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Three_AM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Three_AM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Three_AM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 04hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Four_AM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Four_AM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Four_AM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 05hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Five_AM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Five_AM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Five_AM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 06hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Six_AM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Six_AM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Six_AM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 07hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Seven_AM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Seven_AM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Seven_AM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 08hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Eight_AM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Eight_AM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Eight_AM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 09hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Nine_AM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Nine_AM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Nine_AM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 10hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Ten_AM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Ten_AM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Ten_AM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 11hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Eleven_AM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Eleven_AM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Eleven_AM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 12hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Twelve_PM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Twelve_PM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Twelve_PM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 13hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="One_PM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_One_PM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_One_PM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 14hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Two_PM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Two_PM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Two_PM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 15hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Three_PM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Three_PM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Three_PM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 16hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Four_PM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Four_PM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Four_PM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 17hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Five_PM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Five_PM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Five_PM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 18hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Six_PM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Six_PM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Six_PM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 19hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Seven_PM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Seven_PM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Seven_PM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 20hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Eight_PM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Eight_PM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Eight_PM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 21hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Nine_PM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Nine_PM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Nine_PM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 22hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Ten_PM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Ten_PM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Ten_PM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>      
      <div>
        <p className='text-uppercase fw-bolder mt-4 border-bottom border-dark text-center'>temperature 23hs</p>
        <div className="row g-3 mb-2 text-center">
          <div className="col-md-1">
            <label htmlFor="temp" className="form-label text-capitalize">temp</label>
            <input type="number" className="form-control" id="temp" name="Eleven_PM" onChange={handleChangeH} placeholder="°C" required/>
          </div>
          <div className="col-md-3">
            <label htmlFor="forecast" className="form-label text-capitalize">forecast</label>
            <input type="text" className="form-control" id="forecast" name="Forecast_Eleven_PM" onChange={handleChangeH} placeholder="Forecast" required/>
          </div>
          <div className="col-md-8 mb-2">
          <label htmlFor="formFile" className="form-label">Attach weather forecast image </label>
            <input className="form-control" type="file" id="formFile" name="img_Eleven_PM" onChange={handleChangeH} required/>
          </div> 
        </div>
      </div>
      <button type="button" className="btn btn-dark" onClick={sendDataH}>Submit</button>
    </form>
  )
}

export default FormEditHourly