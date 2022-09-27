import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

const Card = (props) => {

  const {id, country, city, monday, monday_img, monday_max, monday_min,tuesday, tuesday_max, tuesday_min,wednesday, wednesday_max, wednesday_min,thursday,
    thursday_max, thursday_min,friday, friday_max , friday_min,saturday, saturday_max, saturday_min,sunday, sunday_max, sunday_min,tuesday_img, wednesday_img,
    thursday_img ,friday_img, saturday_img, sunday_img} = props


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
                    <h5 className='card-title text-capitalize'>monday</h5>
                    <h5 className="card-title text-capitalize">{monday.slice(0,10)}</h5>
                    <img src={monday_img} className="card-img-top" alt="..."/>
                    <p className="card-text"><strong><span className='display-6'>{monday_max}°</span></strong>/{monday_min}°</p>
                  <Link to= {`/detail/${id}/${monday}`}><button type="button" className="btn btn-secondary">Hourly detail</button></Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className='card-title text-capitalize'>tuesday</h5>
                    <h5 className="card-title text-capitalize">{tuesday.slice(0,10)}</h5>
                    <img src={tuesday_img} className="card-img-top" alt="..."/>
                    <p className="card-text"><strong><span className='display-6'>{tuesday_max}°</span></strong>/{tuesday_min}°</p>
                    <Link to= {`/detail/${id}/${tuesday}`}><button type="button" className="btn btn-secondary">Hourly detail</button></Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className='card-title text-capitalize'>wednesday</h5>
                    <h5 className="card-title text-capitalize">{wednesday.slice(0,10)}</h5>
                    <img src={wednesday_img} className="card-img-top" alt="..."/>
                    <p className="card-text"><strong><span className='display-6'>{wednesday_max}°</span></strong>/{wednesday_min}°</p>
                    <Link to= {`/detail/${id}/${wednesday}`}><button type="button" className="btn btn-secondary">Hourly detail</button></Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className='card-title text-capitalize'>thursday</h5>
                    <h5 className="card-title text-capitalize">{thursday.slice(0,10)}</h5>
                    <img src={thursday_img} className="card-img-top" alt="..."/>
                    <p className="card-text"><strong><span className='display-6'>{thursday_max}°</span></strong>/{thursday_min}°</p>
                    <Link to= {`/detail/${id}/${thursday}`}><button type="button" className="btn btn-secondary">Hourly detail</button></Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className='card-title text-capitalize'>friday</h5>
                    <h5 className="card-title text-capitalize">{friday.slice(0,10)}</h5>
                    <img src={friday_img} className="card-img-top" alt="..."/>
                    <p className="card-text"><strong><span className='display-6'>{friday_max}°</span></strong>/{friday_min}°</p>
                    <Link to= {`/detail/${id}/${friday}`}><button type="button" className="btn btn-secondary">Hourly detail</button></Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className='card-title text-capitalize'>saturday</h5>
                    <h5 className="card-title text-capitalize">{saturday.slice(0,10)}</h5>
                    <img src={saturday_img} className="card-img-top" alt="..."/>
                    <p className="card-text"><strong><span className='display-6'>{saturday_max}°</span></strong>/{saturday_min}°</p>
                    <Link to= {`/detail/${id}/${saturday}`}><button type="button" className="btn btn-secondary">Hourly detail</button></Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className='card-title text-capitalize'>sunday</h5>
                    <h5 className="card-title text-capitalize">{sunday.slice(0,10)}</h5>
                    <img src={sunday_img} className="card-img-top" alt="..."/>
                    <p className="card-text"><strong><span className='display-6'>{sunday_max}°</span></strong>/{sunday_min}°</p>
                    <Link to= {`/detail/${id}/${sunday}`}><button type="button" className="btn btn-secondary">Hourly detail</button></Link>
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

