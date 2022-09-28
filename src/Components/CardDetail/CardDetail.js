import React, { useContext } from 'react'
import dateFormat from 'dateformat'
import './CardDetail.css'
import { Link } from 'react-router-dom';


const CardDetail = (props) => {
  
  const { date_weather,Twelve_AM, Forecast_Twelve_AM,Eight_AM,Eight_PM,Eleven_AM,Eleven_PM,Five_AM,Five_PM,Forecast_Eight_AM,Forecast_Eight_PM,Forecast_Eleven_AM,Forecast_Eleven_PM,Forecast_Five_AM,Forecast_Five_PM,
    Forecast_Four_AM,Forecast_Four_PM,Forecast_Nine_AM,Forecast_Nine_PM,Forecast_One_AM,Forecast_One_PM,Forecast_Seven_AM,Forecast_Seven_PM,Forecast_Six_AM,Forecast_Six_PM,
    Forecast_Ten_AM,Forecast_Ten_PM,Forecast_Three_AM,Forecast_Three_PM,Forecast_Twelve_PM,Forecast_Two_AM,Forecast_Two_PM,Four_AM,Four_PM,Nine_AM,Nine_PM,
    One_AM,One_PM,Seven_AM,Seven_PM,Six_AM,Six_PM,Ten_AM,Ten_PM,Three_AM,Three_PM,Twelve_PM,Two_AM,Two_PM,img_Twelve_AM,img_One_AM,img_Two_AM,img_Three_AM,img_Four_AM,img_Five_AM,img_Six_AM,img_Seven_AM,
    img_Eight_AM,img_Nine_AM,img_Ten_AM,img_Eleven_AM,img_Twelve_PM,img_One_PM,img_Two_PM,img_Three_PM,img_Four_PM,img_Five_PM,img_Six_PM,img_Seven_PM,img_Eight_PM,img_Nine_PM,img_Ten_PM,img_Eleven_PM } = props
  
  const date = dateFormat(date_weather,"dddd")

    return (
    <div className='mt-5 w-100 text-center'>
      <div className='d-flex justify-content-start'>
      <Link to={"/clima"}><button type="button" className="btn btn-primary fw-bold text-uppercase my-2 mx-2"><i className="bi bi-arrow-left me-2"></i>back</button></Link>
      </div>
      <div className="card-group my-5 w-100">
        <div className="card">
          <div className="card-footer">
              <small className="fw-bold text-uppercase">{date}</small>
          </div>
          <div className="card-body d-flex justify-content-center align-items-center">
            <h5 className="card-title">Forecast</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">Temp (°C)</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">00hs</small>
          </div>
          <img src={img_Twelve_AM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Twelve_AM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Twelve_AM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">01hs</small>
          </div>
          <img src={img_One_AM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_One_AM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{One_AM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">02hs</small>
          </div>
          <img src={img_Two_AM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Two_AM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Two_AM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">03hs</small>
          </div>
          <img src={img_Three_AM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Three_AM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Three_AM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">04hs</small>
          </div>
          <img src={img_Four_AM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Four_AM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Four_AM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">05hs</small>
          </div>
          <img src={img_Five_AM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Five_AM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Five_AM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">06hs</small>
          </div>
          <img src={img_Six_AM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Six_AM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Six_AM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">07hs</small>
          </div>
          <img src={img_Seven_AM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Seven_AM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Seven_AM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">08hs</small>
          </div>
          <img src={img_Eight_AM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Eight_AM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Eight_AM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">09hs</small>
          </div>
          <img src={img_Nine_AM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Nine_AM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Nine_AM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">10hs</small>
          </div>
          <img src={img_Ten_AM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Ten_AM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Ten_AM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">11hs</small>
          </div>
          <img src={img_Eleven_AM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Eleven_AM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Eleven_AM}°</small>
          </div>
        </div>
      </div>
      <div className="card-group my-5 w-100">
        <div className="card">
          <div className="card-footer">
              <small className="fw-bold text-uppercase">{date}</small>
          </div>
          <div className="card-body d-flex justify-content-center align-items-center ">
            <h5 className="card-title">Forecast</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">Temp (°C)</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">12hs</small>
          </div>
          <img src={img_Twelve_PM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Twelve_PM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Twelve_PM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">13hs</small>
          </div>
          <img src={img_One_PM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_One_PM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{One_PM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">14hs</small>
          </div>
          <img src={img_Two_PM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Two_PM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Two_PM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">15hs</small>
          </div>
          <img src={img_Three_PM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Three_PM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Three_PM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">16hs</small>
          </div>
          <img src={img_Four_PM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Four_PM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Four_PM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">17hs</small>
          </div>
          <img src={img_Five_PM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Five_PM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Five_PM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">18hs</small>
          </div>
          <img src={img_Six_PM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Six_PM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Six_PM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">19hs</small>
          </div>
          <img src={img_Seven_PM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Seven_PM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Seven_PM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">20hs</small>
          </div>
          <img src={img_Eight_PM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Eight_PM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Eight_PM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">21hs</small>
          </div>
          <img src={img_Nine_PM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Nine_PM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Nine_PM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">22hs</small>
          </div>
          <img src={img_Ten_PM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Ten_PM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Ten_PM}°</small>
          </div>
        </div>
        <div className="card">
          <div className="card-footer">
              <small className="text-muted">23hs</small>
          </div>
          <img src={img_Eleven_PM} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fs-5 fw-normal">{Forecast_Eleven_PM}</h5>
          </div>
          <div className="card-footer">
            <small className="text-muted">{Eleven_PM}°</small>
          </div>
        </div>
      </div>
    </div>
      
      
    );
}

export default CardDetail



