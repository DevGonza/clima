import React, { useContext } from 'react'
import dateFormat from 'dateformat'
import './Card.css'
import { Link } from 'react-router-dom';

const Card = (props) => {

  const {id, country, city, monday, monday_img, monday_max, monday_min,tuesday, tuesday_max, tuesday_min,wednesday, wednesday_max, wednesday_min,thursday,
    thursday_max, thursday_min,friday, friday_max , friday_min,saturday, saturday_max, saturday_min,sunday, sunday_max, sunday_min,tuesday_img, wednesday_img,
    thursday_img ,friday_img, saturday_img, sunday_img} = props
  
    const mondayD =  dateFormat(monday,"yyyy-mm-dd")
    const tuesdayD =  dateFormat(tuesday,"yyyy-mm-dd")
    const wednesdayD =  dateFormat(wednesday,"yyyy-mm-dd")
    const thursdayD =  dateFormat(thursday,"yyyy-mm-dd")
    const fridayD =  dateFormat(friday,"yyyy-mm-dd")
    const saturdayD =  dateFormat(saturday,"yyyy-mm-dd")
    const sundayD =  dateFormat(sunday,"yyyy-mm-dd")

    return (
      <div>
        <div className="card-group my-3">
          <div className="card my-2 bg-primary bg-gradient p-2">
            <div>
              <h2 className='ms-4 text-white'>{city}</h2>
              <h2 className='ms-4 text-white text-uppercase'>{country}</h2>
              <div className="card-group">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{dateFormat(monday,"dddd, mmmm d, yyyy")}</h5>
                    <img src={monday_img} className="card-img-top" alt="..."/>
                    <p className="card-text"><strong><span className='display-6'>{monday_max}°</span></strong>/{monday_min}°</p>
                  <Link to= {`/detail/${id}/${mondayD}`}><button type="button" className="btn btn-secondary">Hourly detail</button></Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{dateFormat(tuesday,"dddd, mmmm d, yyyy")}</h5>
                    <img src={tuesday_img} className="card-img-top" alt="..."/>
                    <p className="card-text"><strong><span className='display-6'>{tuesday_max}°</span></strong>/{tuesday_min}°</p>
                    <Link to= {`/detail/${id}/${tuesdayD}`}><button type="button" className="btn btn-secondary">Hourly detail</button></Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{dateFormat(wednesday,"dddd, mmmm d, yyyy")}</h5>
                    <img src={wednesday_img} className="card-img-top" alt="..."/>
                    <p className="card-text"><strong><span className='display-6'>{wednesday_max}°</span></strong>/{wednesday_min}°</p>
                    <Link to= {`/detail/${id}/${wednesdayD}`}><button type="button" className="btn btn-secondary">Hourly detail</button></Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{dateFormat(thursday,"dddd, mmmm d, yyyy")}</h5>
                    <img src={thursday_img} className="card-img-top" alt="..."/>
                    <p className="card-text"><strong><span className='display-6'>{thursday_max}°</span></strong>/{thursday_min}°</p>
                    <Link to= {`/detail/${id}/${thursdayD}`}><button type="button" className="btn btn-secondary">Hourly detail</button></Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{dateFormat(friday,"dddd, mmmm d, yyyy")}</h5>
                    <img src={friday_img} className="card-img-top" alt="..."/>
                    <p className="card-text"><strong><span className='display-6'>{friday_max}°</span></strong>/{friday_min}°</p>
                    <Link to= {`/detail/${id}/${fridayD}`}><button type="button" className="btn btn-secondary">Hourly detail</button></Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{dateFormat(saturday,"dddd, mmmm d, yyyy")}</h5>
                    <img src={saturday_img} className="card-img-top" alt="..."/>
                    <p className="card-text"><strong><span className='display-6'>{saturday_max}°</span></strong>/{saturday_min}°</p>
                    <Link to= {`/detail/${id}/${saturdayD}`}><button type="button" className="btn btn-secondary">Hourly detail</button></Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{dateFormat(sunday,"dddd, mmmm d, yyyy")}</h5>
                    <img src={sunday_img} className="card-img-top" alt="..."/>
                    <p className="card-text"><strong><span className='display-6'>{sunday_max}°</span></strong>/{sunday_min}°</p>
                    <Link to= {`/detail/${id}/${sundayD}`}><button type="button" className="btn btn-secondary">Hourly detail</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card

