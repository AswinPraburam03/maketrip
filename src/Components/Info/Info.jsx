import React from 'react'
import '../Info/Info.css'
import Guide from '../../Assets/guide.png'
import Dollar from '../../Assets/dol.png'
import Camera from '../../Assets/cam.jpg'

const Info = () => {
  return (
    <div className='info section'>
          <div className="infoContainer container">
          <div className="titleDev flex">
            <h2>Some gift from us.</h2>
            
            </div>

            <div className="cardsDev grid">
              <div className="singleCard grid">
                <div className="iconDev flex">
               <img src={Guide} alt="" />
                </div>

                <span className="cardTitle">Tour guide</span>
              <p>We empower local guides with 2 years of experience and know about the destination</p>
            </div>

              <div className="singleCard grid">
                <div className="iconDev flex colorOne">
                  <img src={Dollar} alt="" />
                </div>

                <span className="cardTitle">Affordable price</span>
              <p>We offer affordable prices and of course with the best facilities for you</p>
            </div>

              <div className="singleCard grid">
                <div className="iconDev flex colorTwo">
                  <img src={Camera} alt="" />
                </div>

                <span className="cardTitle">Documentation</span>
              <p>We have, digital cameras and underwater cameras to capture your best moments</p>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Info