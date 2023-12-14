import React from 'react'
import '../Home/Hero.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HeroBg from '../../Assets/Hero.jpg'

const Hero = () => {
  return (
    <section className='home'>

      <div className="overlay"></div>

    <img src={HeroBg} alt="" className='bgImg'/>

        <div className='homeContent container'>
        <div className="textdiv">
          <span  data-aos="fade-up" className="smallText">Start Expolre</span>

        <p data-aos="fade-up" className='homeTitle'>Indonesia Now</p> 
        <p>The wonderful of Indonesia is awaiting for you. Let's expolre</p>
        <p>Indonesia together with us.</p>
        </div>
    
        <div data-aos="fade-up" className="cardDiv grid">
        <div className="desitnationInput">
        <label htmlFor="city">Location:</label>
        <div className="input flex">
          <input type="text" placeholder='Enter Name Here...'/>
        <LocationOnIcon  className="icon"/>
        </div>
        </div>

        <div className="dateInput">
        <label htmlFor="date">Date:</label>
        <div className="input flex">
          <input type="date" />
        </div>
        </div>

      <div className="priceInput">
        <div className="label_total flex">
        <label htmlFor="price">Guest:</label>
        </div>

        <div className="input flex">
          <input type="text" placeholder='2 guest'/>
        </div>
        </div>
        <button className='btnn'>Find Trip</button>
</div>

        </div>
    </section>
  
  )
}

export default Hero